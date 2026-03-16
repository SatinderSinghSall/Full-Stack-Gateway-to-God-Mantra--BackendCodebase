# Gateway to God - Mantras – Backend Codebase

Backend API for the **Gateway to God** spiritual web application.
This service powers the mantra library, authentication system, and chanting tracking features for the platform.

The backend is built with **Node.js, Express, and MongoDB** and provides REST APIs used by the Next.js frontend.

---

# Overview

The Gateway to God backend manages:

- User authentication
- Mantra data
- Chant tracking
- Secure API endpoints

It acts as the **core data and logic layer** of the full-stack application.

The architecture follows a **modular MVC-style structure** for scalability and maintainability.

---

# Features

## Authentication System

Secure user authentication using JWT.

Features include:

- User registration
- User login
- Token-based authentication
- Protected routes
- Logout handling

Authentication is handled through:

- JWT tokens
- Authorization middleware
- Password hashing

---

## Mantra API

Provides access to mantra content used by the frontend.

Mantras include:

- Hanuman Chalisa
- Lalita Sahasranama
- Rama Mantra

Each mantra entry can include:

- Verse text
- Transliteration
- Meaning
- Metadata

---

## Chant Tracking

Allows users to track how many times they have chanted a mantra.

Features:

- Record chant count
- Store user chant history
- Associate chants with authenticated users

---

## Database Integration

Uses **MongoDB with Mongoose** to manage application data.

Database models include:

- User
- Mantra
- Chant

---

# Tech Stack

## Runtime

- **Node.js**

## Framework

- **Express.js**

## Database

- **MongoDB**

## ODM

- **Mongoose**

## Authentication

- **JSON Web Tokens (JWT)**

## Environment Management

- **dotenv**

---

# Project Structure

```
backend
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   ├── chantController.js
│   │   └── mantraController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── Chant.js
│   │   ├── Mantra.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── chantRoutes.js
│   │   └── mantraRoutes.js
│   │
│   ├── seed
│   │   └── seedMantras.js
│   │
│   └── utils
│       └── generateToken.js
│
├── server.js
├── package.json
└── package-lock.json
```

---

# Key Modules

## Database Configuration

`src/config/db.js`

Handles MongoDB connection using Mongoose.

---

## Models

### User

Stores authentication information.

Fields may include:

- name
- email
- password
- createdAt

---

### Mantra

Represents a spiritual chant.

Fields include:

- title
- verses
- transliteration
- meaning

---

### Chant

Tracks chanting activity for users.

Fields include:

- userId
- mantraId
- chantCount
- timestamp

---

## Controllers

Controllers handle business logic.

### authController.js

Handles:

- Signup
- Login
- Token generation

---

### mantraController.js

Handles:

- Fetching mantra data
- Returning verses and metadata

---

### chantController.js

Handles:

- Recording chant counts
- Retrieving user chant history

---

## Middleware

### authMiddleware.js

Protects API routes by validating JWT tokens.

Ensures that only authenticated users can access protected endpoints.

---

## Utilities

### generateToken.js

Generates JWT tokens used for authentication.

---

# API Routes

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
GET  /api/auth/me
```

---

### Mantras

```
GET /api/mantras
GET /api/mantras/:id
```

---

### Chant Tracking

```
POST /api/chants
GET  /api/chants/user
```

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/gateway-to-god.git
```

Navigate to backend:

```
cd backend
```

Install dependencies:

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root of the backend directory.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Running the Server

Start development server:

```
npm run dev
```

Or run normally:

```
npm start
```

Server will run on:

```
http://localhost:5000
```

---

# Database Seeding

To populate initial mantra data:

```
node src/seed/seedMantras.js
```

This inserts mantra data into MongoDB for testing and development.

---

# Future Improvements

Planned backend improvements include:

- Audio mantra support
- Chant streak tracking
- User progress analytics
- Bookmark favorite mantras
- Admin panel for mantra management
- Rate limiting and security improvements

---

# License

This project is built for educational and spiritual purposes.

---

# Author

Satinder Singh Sall

Full-Stack Developer

Building modern applications that merge technology with spiritual knowledge.

---
