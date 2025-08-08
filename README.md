# Simple React + Node.js Project

A simple full-stack web application built with:

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Database:** MongoDB

This project includes:
- User Registration and Login (with password hashing using `bcryptjs` and JWT authentication)
- Modular React components for UI
- Example sections like Hero, Features, Values, Footer, and Circle Logo

---

## 📂 Project Structure

.
├── backend/ # Node.js + Express + MongoDB backend
│ ├── server.js # Main backend server file
│ └── package.json
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ │ ├── CircleLogoSection.jsx
│ │ │ ├── FeaturesSection.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── HeroSection.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── ValueSection.jsx
│ ├── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/Manikanta-484/SanRadiance.git

### 2️⃣ Backend Setup
Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```
npm install
```

### Configure MongoDB
Make sure MongoDB is running locally, or use a MongoDB Atlas connection string.
Update the mongoose.connect URL inside server.js:

```bash
mongoose.connect("mongodb://localhost:27017/simpleapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Replace with your MongoDB connection string if using Atlas:


mongoose.connect("your-mongodb-atlas-url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### Start the backend server:
``` bash
node server.js
Server runs at: http://localhost:5000
```

### 3️⃣ Frontend Setup
Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```
### Install dependencies:

```bash
npm install
```
### Start the React development server:
```bash
npm start

Frontend runs at: http://localhost:3000
```

### 🔑 API Endpoints
Base URL: http://localhost:5000/api

### Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Login with email & password

### 🛠 Tech Stack
### Frontend:
  React.js
  React Hooks
  JSX Components

### Backend:
  Node.js
  Express.js
  MongoDB + Mongoose
  bcryptjs (password hashing)
  jsonwebtoken (JWT authentication)
  cors (cross-origin requests)

### 🚀 Running the Full Project
In two separate terminals:

Terminal 1 (Backend)
cd backend
node server.js

Terminal 2 (Frontend)
cd frontend
npm start


### ⚠️ Notes
Ensure MongoDB service is running locally or that your Atlas connection is correct.
Change "SECRET_KEY" in server.js to a more secure value before deploying.
Default MongoDB database name is simpleapp. You can change it in the connection URL.
If you see Module not found for react-icons/fa, install it:

```bash
npm install react-icons
```
