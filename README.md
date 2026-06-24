# Personal Portfolio Website

A responsive internship-friendly portfolio website with a Node.js, Express.js, and MongoDB backend for contact form submissions.

## Features

- Modern responsive portfolio UI
- Smooth scrolling navigation
- Hover effects and reveal animations
- Hero, about, skills, projects, education, certificates, and contact sections
- Contact form with backend API
- MongoDB storage for submitted messages
- Admin-friendly API to view and delete messages
- Optional admin dashboard at `/admin.html`

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose

## Folder Structure

```text
portfolio-website/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── admin.html
│   └── assets/
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   └── config/
│       └── db.js
├── .env.example
├── package.json
└── README.md
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from `.env.example`:

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio_website
```

3. Start MongoDB locally or use a MongoDB Atlas connection string.

4. Run the project:

```bash
npm run dev
```

Open `http://localhost:5000` in your browser.

The admin dashboard is available at `http://localhost:5000/admin.html`.

To preview only the frontend without MongoDB:

```bash
npm run preview
```

Open `http://localhost:5500`.

## API Endpoints

### POST `/api/contact`

Saves a contact form submission.

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "subject": "Portfolio Inquiry",
  "message": "Your portfolio looks great!"
}
```

### GET `/api/messages`

Returns all contact messages, newest first.

### DELETE `/api/messages/:id`

Deletes one message by MongoDB document id.

## Personalization Checklist

- Review `BHAKTIRANJAN DAS`, B.Tech CSE details, and education information in `frontend/index.html`.
- Update achievements if you want to add specific academic highlights.
- Replace contact email, phone, LinkedIn, and GitHub links.
- Replace project card links with your real GitHub repositories.
- Add your resume at `frontend/assets/resume.pdf`.
- Replace the profile image URL with your own image if desired.

## GitHub Repository Link

Add your repository link here after pushing the project:

```text
https://github.com/your-username/portfolio-website
```
