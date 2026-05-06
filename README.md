# Vehicle Maintenance Scheduler & Notification System

This project was developed as part of a backend evaluation. It focuses on building a practical system that combines API integration, optimization logic, and basic system design.

---

##  Overview

The project consists of two main parts:

- **Vehicle Maintenance Scheduler**  
  Selects the best set of vehicles to service based on available mechanic hours, aiming to maximize overall impact.

- **Notification System Design**  
  A conceptual design of a scalable notification system for real-world applications.

---

##  Tech Stack

- Node.js  
- Express.js  
- JavaScript (ES6)  
- REST APIs  

---

##  Project Structure


CB.SC.U4CSE23464/

├── notification_app_be/
│ └── src/
│ ├── app.js
│ ├── routes.js
│ ├── service.js
│ └── logger.js
│
├── vehicle_maintenance_scheduler/
│ ├── scheduler.js
│ └── README.md
│
├── logging-middleware/
│ ├── logger.js
│ └── README.md
│
├── notification_system_design.md
├── lods_proof.png
└── .gitignore


---

##  How to Run

1. Navigate to backend folder:

cd notification_app_be


2. Install dependencies:

npm install


3. Start the server:

node src/app.js


4. Open in browser or Postman:

http://localhost:3000/schedule


---

##  Key Highlights

- Clean separation of modules (scheduler, logging, backend)  
- API integration with authentication  
- Optimization logic for task selection  
- Basic logging middleware structure  
- System design thinking included  

---
##  Output

The output shows the optimal selection of vehicles for each depot based on constraints.

Example:

```json
[
  { "depotID": 1, "maxImpact": 106 },
  { "depotID": 2, "maxImpact": 161 }
]