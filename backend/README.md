# FastAPI Backend for Krishan Beniwal Portfolio

High-performance Python backend service providing contact form processing and direct LeetCode stats retrieval.

## Setup & Running

```bash
# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate   # On Windows
# source venv/bin/activate # On Linux/macOS

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --port 8000
```

## Endpoints

- `GET /`: Service health and metadata
- `GET /api/health`: Health status check
- `POST /api/contact`: Validates and receives inquiries
- `GET /api/leetcode/{username}`: Direct server-side GraphQL proxy for real-time LeetCode statistics
