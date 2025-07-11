# TPO Management Portal

## Project Overview

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application built for the Training & Placement Officer (TPO) Management Portal. The portal allows users to manage TPO details across various colleges. It features a login page, an interactive dashboard, real-time data updates, a search modal, and a modal form to add TPO entries.

## Technology Stack

Frontend: React, Tailwind CSS, Axios, React Toastify, Font Awesome

- Backend: Node.js, Express.js
- Database: MySQL
- Others: React Hooks, Modular Components, REST APIs

## Features

- **Authentication**
    - Secure frontend login (form-based)
    - Session management using React state
    - Toast-based feedback on login

- **Dashboard**
  - Welcome message on successful login
  - Display all TPO entries in a responsive, searchable, and paginated table
  - Logout functionality
  - Pagination for better data navigation
  - Search modal to filter TPOs by name, college, or email
  - Reset button to reload all data

- **Add TPO Details**
  - Modal popup form to add new TPO details without page refresh
  - Form validation on all fields
  - Immediate update of the dashboard table upon submission

- **Search & Filter**
  - Search bar to filter TPO records by name, college, or email
  - Resets to full list with one click

## Project Structure

- `tpo_dashboard/`
  - `frontend/`
        - `src/`
            - `components/`
                - `Navbar.jsx/`
            - `pages/`
                - `AddTPODetails.jsx/`
                - `Dashboard.jsx/`
                - `Home.jsx/`
                - `Login.jsx/`
                - `Register.jsx/`
                - `SearchTPO.jsx/`
            - App.jsx
            - main.jsx
            - index.css
  - `backend`
        - `controllers/`
            - `auth_controller.js/`
            - `tpo_controller.js/`
        - `routers/`
            - `auth_router.js/`
            - `tpo_router.js/`
        - `db.js`
        - `server.js`


## Setup Instructions

## Prerequisites
- Node.js & npm
- MySQL Server
- Backend server running on localhost:5000
- Frontend running on localhost:5173 

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Diksha1Singla/tpo_dashboard
   cd tpo_dashboard
   ```

2. **For Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **For Backend:**
   ```bash
   cd backend
   npm install
   nodemon server.js
   ```

## Notes

- Backend must expose the following API routes:
    - GET /tpo/getTPO – Fetch all TPO records
    - POST /tpo/addTPO – Add a new TPO record
    - POST /tpo/searchTPO – Search TPO by name/email/college
- Toast messages provide user feedback for actions.
- You can easily deploy this project using Vercel (Frontend) and Render or Railway (Backend).


## Contact

For any queries or support, please contact the project maintainer.
