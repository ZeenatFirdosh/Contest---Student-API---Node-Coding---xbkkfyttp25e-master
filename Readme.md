Here is the **complete Markdown content in one clipboard-ready block**, suitable to paste directly into a `.md` file:


# Student Management API

The **Student Management API** is a Node.js and Express-based application designed to manage student records. It supports creating, retrieving, updating, and deleting student data.


## 📁 Folder Structure

The project follows a clean and organized folder layout:


```
src/
├── app.js                # Entry point for the Express application (routes & middleware)
├── index.js              # Server connection setup
│
├── controllers/          # Handles HTTP request logic
│   └── studentController.js
│
├── data/                 # Contains student data
│   └── data.json
│
└── routes/               # Defines API routes
└── studentRoutes.js

````


## 🚀 API Endpoints

### **1. Get All Students**  
**Endpoint:** `GET /api/students`  
**Description:** Retrieve all student records.  

**Query Parameters (optional):**
- `sort=grade` → Sort by grade (ascending)  
- `sort=gradeDesc` → Sort by grade (descending)

**Responses:**
- **200 OK:** Returns an array of students  
- **500 Internal Server Error:** `"Internal server error"`

---

### **2. Get Student by ID**  
**Endpoint:** `GET /api/students/:id`  
**Description:** Retrieve a specific student by ID.

**Path Parameter:**
- `id` → Student ID

**Responses:**
- **200 OK:** `"Student data"` with details  
- **404 Not Found:** `"Student not found"`  
- **500 Internal Server Error:** `"Internal server error"`

---

### **3. Create Student**  
**Endpoint:** `POST /api/students`  
**Description:** Create a new student.

**Request Body Example:**
```json
{
  "name": "John Doe",
  "grade": "A"
}
````

**Responses:**

* **201 Created:** `"Student created"` with details
* **500 Internal Server Error:** `"Internal server error"`

---

### **4. Update Student**

**Endpoint:** `PATCH /api/students/:id`
**Description:** Update student data by ID.

**Path Parameter:**

* `id` → Student ID

**Request Body Example:**

```json
{
  "name": "Updated Name",
  "grade": "B"
}
```

**Responses:**

* **200 OK:** `"Student updated"`
* **404 Not Found:** `"Student not found"`
* **500 Internal Server Error:** `"Internal server error"`

---

### **5. Delete Student**

**Endpoint:** `DELETE /api/students/:id`
**Description:** Delete a student by ID.

**Path Parameter:**

* `id` → Student ID

**Responses:**

* **200 OK:** `"Student deleted"`
* **404 Not Found:** `"Student not found"`
* **500 Internal Server Error:** `"Internal server error"`

---

## 🧪 Usage

Use tools like Postman, Thunder Client, cURL, or any HTTP client to send requests using the appropriate HTTP method (`GET`, `POST`, `PATCH`, `DELETE`) and required parameters or request bodies.

---

## 📘 Code Reference

Core logic is implemented in **controllers/studentController.js**, including:

* `getAllStudents` – Retrieve all students
* `getStudentById` – Retrieve a student by ID
* `createStudent` – Create a new student
* `updateStudent` – Update an existing student
* `deleteStudent` – Delete a student

---
