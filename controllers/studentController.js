const fs = require("fs");
const path = require("path");

// Define the file path to store student data
const studentsFilePath = path.join(__dirname, "../data", "data.json");

// Function to retrieve all students
const getAllStudents = (req, res) => {
  try {
    // Use fs.readFile to read data from the file
    const data = fs.readFileSync(studentsFilePath, "utf-8");
    const students = JSON.parse(data);
    // Parse the data, handle errors, and send the response
    if (!Array.isArray(students)) {
      return res.status(500).json({ error: "Internal server error" });
    }
    // Implement sorting based on query parameters if needed.
    const { sort } = req.query;
    if (sort === "grade") {
      students.sort((a, b) => a.grade - b.grade);
    } else if (sort === "gradeDesc") {
      students.sort((a, b) => b.grade - a.grade);
    }
    res.status(200).json(students);
  } catch (error) {
    console.error("Error reading student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to retrieve a student by ID
const getStudentById = (req, res) => {
  // Extract student ID from request parameters
  const { id } = req.params;
  // Use fs.readFile to read data from the file
  try {
    const data = fs.readFileSync(studentsFilePath, "utf-8");
    const students = JSON.parse(data);
    // Find the student with the given ID, handle errors, and send the response
    const student = students.find((s) => s.id === id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error reading student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to create a new student
const createStudent = (req, res) => {
  // Extract student data from request body
  const { name, age, grade } = req.body;
  // Use fs.readFile to read data from the file
  try {
    const data = fs.readFileSync(studentsFilePath, "utf-8");
    const students = JSON.parse(data);
    // Create a new student object, add it to the data, and write back to the file
    const newStudent = {
      id: generateStudentId(students),
      name,
      age,
      grade,
    };
    students.push(newStudent);
    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
    // Handle errors and send the response
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error reading/writing student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to update a student by ID
const updateStudent = (req, res) => {
  // Extract student ID and updated data from request parameters and body
  const { id } = req.params;
  const { name, age, grade } = req.body;
  // Use fs.readFile to read data from the file
  try {
    const data = fs.readFileSync(studentsFilePath, "utf-8");
    const students = JSON.parse(data);
    // Find the student with the given ID, update its data, and write back to the file
    const studentIndex = students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      return res.status(404).json({ error: "Student not found" });
    }
    const updatedStudent = {
      id,
      name,
      age,
      grade,
    };
    students[studentIndex] = updatedStudent;
    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
    // Handle errors and send the response
    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error reading/writing student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to delete a student by ID
const deleteStudent = (req, res) => {
  // Extract student ID from request parameters
  const { id } = req.params;
  // Use fs.readFile to read data from the file
  try {
    const data = fs.readFileSync(studentsFilePath, "utf-8");
    const students = JSON.parse(data);
    // Find the student with the given ID, delete it, and write back to the file
    const studentIndex = students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      return res.status(404).json({ error: "Student not found" });
    }
    students.splice(studentIndex, 1);
    fs.writeFileSync(studentsFilePath, JSON.stringify(students, null, 2));
    // Handle errors and send the response
    res.status(204).send();
  } catch (error) {
    console.error("Error reading/writing student data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to generate a unique student ID
const generateStudentId = (students) => {
  // Calculate and return a new unique ID based on existing students
  const ids = students.map((s) => parseInt(s.id, 10));
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  return (maxId + 1).toString();
};

module.exports = {
  getAllStudents,
  getStudentById,
  deleteStudent,
  createStudent,
  updateStudent,
};
