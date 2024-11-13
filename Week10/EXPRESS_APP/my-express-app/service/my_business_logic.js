const my_db = require('../models/my_db');
const db = require('../models/db_connections');

// Function to get all students
const get_students = () => {
    console.log("getting here:", my_db);
    return my_db.students;
};

// Function to get a student by ID
const get_student_by_id = (request) => {
    for (let i = 0; i < my_db.students.length; i++) {
        if (request.params.studentid == my_db.students[i].id) {
            return my_db.students[i];
        }
        console.log(my_db.students[i]);
    }
    return "nothing";
};

// Function to get all students from the database
const getallstudents = () => {
    db.query('SELECT * FROM students', (err, result) => {
        if (err) {
            console.log("ERROR CONNECTING TO DB");
            return "ERROR CONNECTING TO DB";
        } else {
            console.log("result from db", result);
            return result;
        }
    });
};

module.exports = { get_students, get_student_by_id, getallstudents };
