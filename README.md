# Premium Personal Portfolio – Krishan Beniwal

> **Software Developer | AI/ML Specialist**  
> *"Building intelligent solutions through code, creativity, and artificial intelligence."*

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![LeetCode](https://img.shields.io/badge/LeetCode-160%2B_Solved-FFA116?style=flat&logo=leetcode&logoColor=white)](https://leetcode.com/u/Krishan_Beniwal)

---

## 🌟 Overview

A modern, high-performance, responsive personal portfolio website engineered for **Krishan Beniwal**, a final-year B.Tech Computer Science and Engineering student specializing in **Artificial Intelligence and Machine Learning** at **Shri Vishwakarma Skill University** (Class of 2027).

Designed specifically to impress recruiters, engineering managers, and technical interviewers, showcasing hands-on experience across **Multi-Agent AI Systems (LangGraph)**, full-stack web applications (**React, FastAPI, Node.js**), cloud tooling (**Docker, AWS, Kubernetes**), and consistent algorithmic problem solving (**LeetCode**).

---

## 🚀 Key Sections & Features

1. **Hero Section**:
   - Dynamic typing animation cycling through developer identities.
   - Quick action buttons: **View Projects**, **Download Resume**, **GitHub**, and **LinkedIn**.
   - Futuristic cybernetic visual identity with glowing badges and terminal indicators.
2. **About Me & Career Objective**:
   - Narrative of Krishan's academic background and computer science foundation.
   - Distinct career objective card highlighting motivation for impactful software engineering.
   - Academic snapshot and categorization of primary and secondary career interests.
3. **Categorized Technical Skills**:
   - Clean, icon-rich cards without fabricated proficiency bars.
   - Covers Programming (C++, Python), AI/ML (Generative AI, LangGraph, Agentic AI), Web (React.js, Modern JS), Backend (FastAPI, REST APIs), Databases (PostgreSQL, Redis, SQL), and DevOps (Docker, Celery, Kubernetes, AWS).
   - Filter tabs for quick recruiter navigation.
4. **Featured Projects (Hero Prominence)**:
   - **Project 1: AI-Powered Intelligent GitHub Pull Request Review System**
     - Multi-agent LangGraph workflow with OWASP Top 10 security scanning, static code analysis, architecture evaluation, and post-merge memory learning.
     - Asynchronous pipeline with Celery, Redis, and FastAPI.
     - Action button to GitHub repository.
   - **Project 2: Arogya Sarthi – AI-Powered Medical Diagnosis System**
     - Live-deployed health tech platform with prominent **Live Demo** button and pulsing status indicator.
     - MERN + Flask + TensorFlow + Gemini API architecture.
     - AI symptom evaluation, automated PDF medical reports, and strict ethical healthcare disclaimer.
   - Interactive deep-dive modal for architectural inspection.
5. **Education Timeline**:
   - **Shri Vishwakarma Skill University**: B.Tech CSE (AI & ML), graduating 2027.
   - Coursework highlights and academic foundation.
6. **Certifications & Professional Development**:
   - **Data Science Mentorship Program** from **AIMERZ.ai** (Successfully Completed).
   - Displayed strictly as completed mentorship program with skills acquired.
7. **Problem-Solving & Coding Journey**:
   - Authentic, verified **LeetCode** statistics: **163 Total Solved** (48 Easy, 95 Medium, 20 Hard), Global Ranking: ~1.1M.
   - Live sync capability with graceful fallback to verified authentic metrics.
   - Direct link to [Krishan's LeetCode Profile](https://leetcode.com/u/Krishan_Beniwal).
8. **Professional Strengths**:
   - 9 core competencies: Analytical Thinking, Logical Reasoning, Problem Solving, Quick Learning, Adaptability, Communication, Team Collaboration, Attention to Detail, Continuous Learning.
9. **Interactive Contact & Form**:
   - Direct contact links: Email (`kbeniwal289@gmail.com`), GitHub, LinkedIn, LeetCode.
   - One-click copy email with visual toast notification.
   - Validated contact form connected to backend and Web3Forms delivery (no fake success messages!).
10. **UI/UX Polish**:
    - Dark/Light mode toggle with persistence in `localStorage`.
    - Real-time scroll depth progress indicator.
    - Smooth scrolling, accessible labels, responsive mobile drawer menu, and back-to-top floating button.

---

## 🛠️ Technology Stack

- **Frontend**: React.js 18, Vite 5, Tailwind CSS 3
- **Icons & Animation**: Lucide React, Framer Motion, Canvas Confetti
- **Backend**: Python 3.12, FastAPI, Pydantic, Uvicorn
- **Deployment**: Ready for Vercel, Netlify, or Docker

---

## 📂 Project Directory Structure

```
portfolio/
├── dist/                        # Production build artifacts
├── public/
│   ├── favicon.svg              # Custom KB brand favicon
│   └── Krishan_Beniwal_Resume.pdf # Real downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header & theme toggle
│   │   ├── Hero.jsx             # Hero section with animated typing
│   │   ├── About.jsx            # Academic summary & career objective
│   │   ├── Skills.jsx           # Categorized skill badges
│   │   ├── Projects.jsx         # Featured project cards
│   │   ├── ProjectModal.jsx     # Deep dive architectural modal
│   │   ├── Education.jsx        # Education timeline
│   │   ├── Certifications.jsx   # AIMERZ.ai completed mentorship
│   │   ├── CodingJourney.jsx    # LeetCode statistics & DSA focus
│   │   ├── Strengths.jsx        # 9 professional strength cards
│   │   ├── Contact.jsx          # Validated contact form & links
│   │   ├── Footer.jsx           # Clean developer footer
│   │   ├── ScrollProgress.jsx   # Top reading progress indicator
│   │   ├── BackToTop.jsx        # Floating back to top button
│   │   └── Toast.jsx            # Pop-up notification component
│   ├── data/
│   │   └── portfolioData.js     # Centralized, authentic profile data
│   ├── hooks/
│   │   ├── useTheme.js          # Dark/light theme hook
│   │   └── useActiveSection.js  # Scrollspy active navigation hook
│   ├── App.jsx                  # Main application container
│   ├── index.css                # Tailwind CSS + custom glassmorphism
│   └── main.jsx                 # React root renderer
├── backend/
│   ├── main.py                  # FastAPI contact & LeetCode proxy
│   ├── requirements.txt         # Python dependencies
│   └── README.md                # Backend service documentation
├── index.html                   # HTML5 template with SEO & OpenGraph
├── package.json                 # Frontend dependencies and scripts
├── tailwind.config.js           # Custom color palette & typography
├── vite.config.js               # Vite bundler configuration
├── vercel.json                  # Vercel deployment configuration
└── netlify.toml                 # Netlify deployment configuration
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18+ or v20+ recommended (`node -v`)
- **Python**: 3.10+ (for optional backend server)

### 2. Install & Start Frontend

```bash
# Clone or navigate to the repository
cd portfolio

# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

Visit `http://localhost:3000` (or `http://localhost:5173`) in your browser.

### 3. Build for Production

```bash
npm run build
```

The optimized static assets will be generated in `dist/`. You can preview the production build locally with:

```bash
npm run preview
```

### 4. Optional: Run FastAPI Backend Service

```bash
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate # macOS/Linux

# Install requirements
pip install -r requirements.txt

# Run server
uvicorn main:app --reload --port 8000
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub: `git push origin main`.
2. Visit [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect `vite` via `vercel.json`.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Netlify will read `netlify.toml` with:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Click **Deploy Site**.

---

## 📬 Contact Information

- **Full Name**: Krishan Beniwal
- **Email**: [kbeniwal289@gmail.com](mailto:kbeniwal289@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/krishan-beniwal-7b0243328](https://www.linkedin.com/in/krishan-beniwal-7b0243328)
- **GitHub**: [https://github.com/KrishanBeniwal01](https://github.com/KrishanBeniwal01)
- **LeetCode**: [https://leetcode.com/u/Krishan_Beniwal](https://leetcode.com/u/Krishan_Beniwal)
