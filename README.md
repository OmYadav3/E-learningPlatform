# E-learningPlatform

A full-stack e-learning platform built with a Node.js/MongoDB backend and a modern JavaScript frontend.

## 🛠 Project Structure

E-learningPlatform/
├── backend/ # Node.js + Express API
│ ├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── index.js
└── frontend/ # Client-side app (React/Vue/Vanilla JS)
├── public/
└── src/



---

##  Technologies

- **Backend**: Node.js, Express, Mongoose, MongoDB
- **Frontend**: JavaScript-based (React, Vue, or plain JS depending on your setup)
- Authentication via JWT and protected routes
- Core features: user accounts, job postings, job applications, role-based access control

---

##  Features

- **User Authentication**: Sign-up, Login, Cookie-based JWT auth
- **Role Management**: Different behaviors for users (e.g., admin vs. job seeker)
- **Job CRUD**: Post jobs, fetch listings, view job by ID
- **Applications**: Apply to jobs, track applications, update status
- **Secure API**: Protected routes using authentication middleware
- **Clean Data Models**: Mongoose schemas with useful defaults and validations

---

##  Setup & Usage

### Backend (in `backend/`)

```bash
cd backend
cp .env.example .env             # Add your MongoDB URI and JWT secret
npm install
npm run dev

```

### frontend (in `frontend/`)

cd frontend
npm install
npm run dev


