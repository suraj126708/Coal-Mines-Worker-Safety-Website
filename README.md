# **Coal Mines Worker Tracking and Safety Website**

This is a web application designed for coal mines to ensure the safety and efficient management of workers. Built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**, the platform provides features for monitoring worker attendance, sending safety alerts, recognizing outstanding workers, and managing other mine-related operations.  

---

## **Features**
- **Worker Attendance Tracking**: Monitor daily attendance with visual charts for present and absent workers.
- **Safety Alerts & Notifications**: Instantly broadcast safety alerts to all workers.
- **Worker of the Month**: Highlight top-performing workers with recognition features.
- **Interactive Dashboard**: View a sorted list of workers based on joining dates, along with their details (name, gender, membership, trainer, etc.).
- **Responsive UI**: Designed using **Tailwind CSS** for a clean and modern look.

---

## **Technologies Used**
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Charts**: React PyChart for visual representation
- **Version Control**: Git and GitHub for code management

---

## **Installation and Setup**

### **Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

### **Steps to Run Locally**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/coal-mines-website.git
   cd Coal-Mines-Worker-Safety-Website
   ```

2. **Install Dependencies**:
   Navigate to the root directory and the client folder to install required dependencies.
   ```bash
   # For backend
   npm install
   
   # For frontend
   cd client
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the Application**:
   - Start the backend server:
     ```bash
     npm run server
     ```
   - Start the frontend client:
     ```bash
     cd client
     npm start
     ```

5. **Open the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## **Folder Structure**
```
coal-mines-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.js          # Main App file
│   │   └── index.js        # Entry point for React
│   ├── public/             # Static files
│   └── package.json        # Frontend dependencies
├── server/                 # Express backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── server.js           # Backend entry point
│   └── package.json        # Backend dependencies
├── .env                    # Environment variables
├── README.md               # Project documentation
└── package.json            # Root dependencies
```

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For any questions or suggestions, feel free to reach out:
- **Email**: [suraj.gitte23@vit.edu](suraj.gitte23@vit.edu)
- **LinkedIn**: [https://www.linkedin.com/in/suraj-gitte-7b71a7288/](https://www.linkedin.com/in/suraj-gitte-7b71a7288/)

---
