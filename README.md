# Time Capsule 📦⏳  

**Time Capsule** is a decentralized and secure platform designed to store digital memories. With this application, users can save meaningful moments as "time capsules" that can only be unlocked at a future date. The platform integrates modern technologies like **React** for the frontend and **Node.js** for the backend to ensure a seamless user experience.

---

## 🌟 Features

- **Create Capsule**: Store text, images, or other media with a designated unlock date.
- **Unlock Capsule**: Retrieve stored memories using a unique capsule ID.
- **Interactive Dashboard**: View and manage created capsules.
- **Contact Page**: A simple form for users to reach out for queries or assistance.
- **Custom 404 Page**: A fun, informative page for routes that don’t exist.
- **Modern UI**: Designed with **Tailwind CSS** for a clean and responsive user interface.

---

## 🛠️ Tech Stack

### Frontend:
- **React**: A popular JavaScript library for building user interfaces.
- **Tailwind CSS**: For styling and ensuring a responsive design.

### Backend:
- **Node.js**: Server-side runtime for building REST APIs.
- **Express.js**: A web framework for building fast and scalable server-side applications.

---

## 📂 Project Structure

```
time-capsule/
├── backend/               # Backend (Node.js and Express.js)
│   ├── server.js          # Core backend logic
│   ├── package.json       # Backend dependencies
│   ├── package-lock.json  # Locked dependency versions
├── client/                # Frontend (React.js)
│   ├── public/            # Static assets (HTML, manifest, etc.)
│   ├── src/               # React source files
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page-specific components (e.g., Home, Contact)
│   ├── package.json       # Frontend dependencies
│   ├── package-lock.json  # Locked dependency versions
├── README.md              # Documentation
├── .gitignore             # Git ignored files
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

### Step 1: Clone the Repository

1. Clone the repository to your local system:
   ```bash
   git clone https://github.com/Arjunmehta312/time-capsule-v1.git
   ```
2. Navigate into the project directory:
   ```bash
   cd time-capsule-v1
   ```

---

### Step 2: Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```
   By default, the server runs on [http://localhost:5000](http://localhost:5000).

---

### Step 3: Frontend Setup

1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   By default, the app runs on [http://localhost:3000](http://localhost:3000).

---

### Step 4: Run Full Application

With both servers running, the backend will handle API requests, while the React frontend will provide the user interface.

---

## 🌐 Project Pages

### 1. **Home Page**
The starting point of the app, introducing users to the concept of Time Capsule and providing navigation options.

### 2. **Create Capsule**
A form where users can:
- Enter the title and description of their capsule.
- Upload media or files.
- Set a future unlock date.

### 3. **Unlock Capsule**
Retrieve previously stored capsules by entering the unique ID.

### 4. **Dashboard**
Displays a list of all created capsules for the user.

### 5. **Contact Page**
Allows users to send queries or messages through a simple form. Data submission is logged in the backend.

### 6. **404 Page**
A customized page for non-existent routes.

---


## 🧪 API Endpoints

### **Base URL**: `http://localhost:5000`

| Endpoint          | Method | Description                        |
|-------------------|--------|------------------------------------|
| `/api/capsules`   | `POST` | Create a new time capsule         |
| `/api/capsules/:id` | `GET`  | Retrieve a specific capsule by ID |
| `/api/contact`    | `POST` | Submit a query through the contact form |

---


## 🤝 Contributions

We welcome contributions from developers!  
To contribute:
1. Fork this repository.
2. Create a new branch.
3. Commit your changes.
4. Push to your fork.
5. Submit a Pull Request.

---

## ⚖️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 👨‍💻 Author

**Arjun Mehta**  
