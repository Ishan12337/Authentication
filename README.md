# 🚀 Authentication Backend (Node.js + Express + MongoDB)

A secure backend authentication system built using **Node.js, Express, MongoDB, and JWT**.  
It supports user registration, login, token-based authentication, and protected routes.

---

## 📌 Features

- 🔐 User Registration with hashed password
- 🔑 JWT Authentication
- 🛡️ Protected Routes (Authorization middleware)
- 🗄️ MongoDB Database Integration (Mongoose)
- ⚡ Clean MVC Architecture (Routes → Controllers → Models)
- 🌱 Environment-based configuration using dotenv

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Crypto (for password hashing)
- Dotenv

---

## 📂 Project Structure
authentication/
│
├── src/
│ ├── controllers/
│ │ └── auth.controller.js
│ │
│ ├── models/
│ │ ├── user.model.js
│ │ └── session.model.js
│ │
│ ├── routes/
│ │ └── user.route.js
│ │
│ ├── db/
│ │ └── db.js
│ │
│ └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md


Headers:

Authorization: Bearer <your_token>
🔑 Authentication Flow
User registers → password hashed
JWT token generated
Token sent to client
Client sends token in headers
Middleware verifies token
Access granted to protected routes
⚠️ Important Notes
Always send token in:
Authorization: Bearer <token>
Never send token in query params ❌
Ensure MongoDB is running before starting server
🚀 Future Improvements
Login API
Refresh Tokens
Role-based Authorization
Password Reset (Email)
OAuth (Google Login)

👨‍💻 Author

Ishan Tiwari

⭐ If you like this project

Give it a ⭐ on GitHub and share it 🚀
