Student Management API
The Student Management API is a Node.js and Express-based application designed to manage student records. The API provides functionalities to create, retrieve, update, and delete student data.

Folder Structure
The project follows a structured folder layout for better organization:

src/: This folder contains the primary application code.
app.js: Entry point for the Express application, where routes and middleware are configured.
index.js: Manages the server connection.
controllers/: Contains the controller logic for handling HTTP requests.
studentController.js: Defines routes and implements CRUD operations for students.
data/: Contains student data.
data.json: Contains the predefined data file.
routes/: Contains route definitions for the API.
studentRoutes.js: Defines API endpoints and routes for student-related operations.
API Endpoints
Get All Students
Endpoint: GET /api/students
Description: Retrieve all students.
Query Parameters:
sort (optional): Sort students by grade in ascending order (grade) or descending order (gradeDesc).
Response: If successful, returns a 200 OK status code with an array of student data. If there's an error, it returns a 500 Internal Server Error status code with an "Internal server error" message.
Get Student by ID
Endpoint: GET /api/students/:id
Description: Retrieve a student by their ID.
Request Parameter:
id: The ID of the student to retrieve.
Response: If the student is found, it returns a 200 OK status code with a message indicating "Student data" and the student's details. If the student is not found, it returns a 404 Not Found status code with a "Student not found" message. If there's an error, it returns a 500 Internal Server Error status code with an "Internal server error" message.
Create Student
Endpoint: POST /api/students
Description: Create a new student.
Request Body: JSON object containing student data (e.g., name, grade).
Response: If successful, returns a 201 Created status code with a message indicating "Student created" and the student's details. If there's an error, it returns a 500 Internal Server Error status code with an "Internal server error" message.
Update Student
Endpoint: PATCH /api/students/:id
Description: Update an existing student by their ID.
Request Parameter:
id: The ID of the student to update.
Request Body: JSON object containing the updated student data (e.g., name, grade).
Response: If the student is updated successfully, it returns a 200 OK status code with a message indicating "Student updated" and the updated student's details. If the student is not found, it returns a 404 Not Found status code with a "Student not found" message. If there's an error, it returns a 500 Internal Server Error status code with an "Internal server error" message.
Delete Student
Endpoint: DELETE /api/students/:id
Description: Delete a student by their ID.
Request Parameter:
id: The ID of the student to delete.
Response: If the student is deleted successfully, it returns a 200 OK status code with a message indicating "Student deleted" and the deleted student's details. If the student is not found, it returns a 404 Not Found status code with a "Student not found" message. If there's an error, it returns a 500 Internal Server Error status code with an "Internal server error" message.
Usage
To utilize the Student Management API, send HTTP requests to the specified endpoints using appropriate HTTP methods (e.g., POST, GET, PATCH, DELETE), along with the required data (if applicable) in the request body or parameters.

Code Reference
The Student Management API code can be found in the controllers/studentController.js file. It contains functions for handling API endpoints related to student management, including creating, retrieving, updating, and deleting student records.

getAllStudents: Retrieve all students.
getStudentById: Retrieve a student by ID.
createStudent: Create a new student.
updateStudent: Update an existing student.
deleteStudent: Delete a student.
