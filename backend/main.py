from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
import urllib.request
import json
import logging
from typing import Optional
from datetime import datetime

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("portfolio-backend")

app = FastAPI(
    title="Krishan Beniwal Portfolio API",
    description="Backend microservice for contact form handling and live data retrieval.",
    version="1.0.0"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for local dev and deployed frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=3000)

class ContactResponse(BaseModel):
    success: bool
    message: str
    timestamp: str

@app.get("/")
def root():
    return {
        "status": "online",
        "service": "Krishan Beniwal Portfolio API",
        "owner": "Krishan Beniwal",
        "version": "1.0.0"
    }

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}

@app.post("/api/contact", response_model=ContactResponse, status_code=status.HTTP_200_OK)
def handle_contact(payload: ContactRequest):
    """
    Receives verified contact inquiries from recruiters and collaborators.
    Validates payload and logs the transmission.
    """
    try:
        logger.info(f"Incoming message from {payload.name} <{payload.email}>: Subject: {payload.subject}")
        # In production, connect SMTP, SendGrid, or AWS SES
        
        return ContactResponse(
            success=True,
            message=f"Thank you, {payload.name}! Your message has been received by Krishan Beniwal.",
            timestamp=datetime.utcnow().isoformat()
        )
    except Exception as e:
        logger.error(f"Error handling contact form: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to process contact inquiry."
        )

@app.get("/api/leetcode/{username}")
def get_leetcode_stats(username: str):
    """
    Direct server-side GraphQL proxy to retrieve official LeetCode stats
    without browser CORS restrictions.
    """
    try:
        graphql_query = {
            "query": """
            query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    username
                    profile {
                        ranking
                        reputation
                    }
                    submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                        }
                    }
                }
            }
            """,
            "variables": {"username": username}
        }
        
        req = urllib.request.Request(
            'https://leetcode.com/graphql',
            data=json.dumps(graphql_query).encode('utf-8'),
            headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}
        )
        
        with urllib.request.urlopen(req, timeout=8) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            matched = res_data.get("data", {}).get("matchedUser")
            if not matched:
                raise HTTPException(status_code=404, detail="LeetCode user not found")
            
            submissions = matched.get("submitStatsGlobal", {}).get("acSubmissionNum", [])
            stats_dict = {item["difficulty"]: item["count"] for item in submissions}
            
            return {
                "success": True,
                "username": username,
                "ranking": matched.get("profile", {}).get("ranking"),
                "totalSolved": stats_dict.get("All", 0),
                "easy": stats_dict.get("Easy", 0),
                "medium": stats_dict.get("Medium", 0),
                "hard": stats_dict.get("Hard", 0)
            }
    except Exception as err:
        logger.warning(f"Could not fetch LeetCode for {username}: {err}")
        # Fallback to verified baseline for Krishan_Beniwal
        if username.lower() == "krishan_beniwal":
            return {
                "success": True,
                "username": "Krishan_Beniwal",
                "ranking": 1100586,
                "totalSolved": 163,
                "easy": 48,
                "medium": 95,
                "hard": 20,
                "is_fallback": True
            }
        raise HTTPException(status_code=502, detail="Upstream LeetCode API unreachable")
