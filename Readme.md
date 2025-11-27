Student Management API is a Node.js and Express-based application designed to manage student records with full CRUD operations on student data.[1][5]

## Overview

The Student Management API allows clients to create, retrieve, update, and delete student information through RESTful HTTP endpoints.[9][1]
It is built with Node.js and Express, following a structured folder layout for maintainability and clarity.[5][11]

## Folder structure

- src/: Primary application source code.[5]
  - app.js: Entry point where the Express app, routes, and middleware are configured.[9]
  - index.js: Manages server startup and connection.[5]
- controllers/: Contains request-handling logic.[13]
  - studentController.js: Implements CRUD operations for students.[12]
- data/: Stores student data files.[5]
  - data.json: Predefined student data.[12]
- routes/: Defines API routes.[9]
  - studentRoutes.js: Maps student-related endpoints to controller functions.[13]

## API endpoints

- Get All Students  
  - Method: GET /api/students  
  - Description: Retrieve all students, with optional sorting by grade using the sort query parameter (grade or gradeDesc).[8]
  - Responses:  
    - 200 OK with an array of students on success.[14]
    - 500 Internal Server Error with a generic error message on failure.[14]

- Get Student by ID  
  - Method: GET /api/students/:id  
  - Description: Retrieve a single student by ID.[8]
  - Responses:  
    - 200 OK with a “Student data” message and student details if found.[14]
    - 404 Not Found with “Student not found” if the ID does not exist.[14]
    - 500 Internal Server Error on unexpected errors.[14]

- Create Student  
  - Method: POST /api/students  
  - Description: Create a new student using a JSON body (for example, name and grade).[8]
  - Responses:  
    - 201 Created with “Student created” and the new student details on success.[14]
    - 500 Internal Server Error on failure.[14]

- Update Student  
  - Method: PATCH /api/students/:id  
  - Description: Partially update an existing student’s data by ID.[8]
  - Responses:  
    - 200 OK with “Student updated” and updated details on success.[14]
    - 404 Not Found with “Student not found” if the ID does not exist.[14]
    - 500 Internal Server Error on unexpected errors.[14]

- Delete Student  
  - Method: DELETE /api/students/:id  
  - Description: Delete a student record by ID.[8]
  - Responses:  
    - 200 OK with “Student deleted” and deleted student details on success.[14]
    - 404 Not Found with “Student not found” if the ID does not exist.[14]
    - 500 Internal Server Error on unexpected errors.[14]

## Usage

To use the Student Management API, send HTTP requests to the defined endpoints with the appropriate methods (GET, POST, PATCH, DELETE).[11][9]
Include any required parameters in the URL path or query string, and provide JSON request bodies when creating or updating students.[1][13]

## Code reference

Core API logic resides in controllers/studentController.js, which contains the handler functions for student operations.[16][12]
Key controller functions include:  
- getAllStudents: Retrieve all students, with optional sorting.[12]
- getStudentById: Retrieve a student by ID.[12]
- createStudent: Create a new student record.[12]
- updateStudent: Apply updates to an existing student.[12]
- deleteStudent: Remove a student record by ID.[12]
