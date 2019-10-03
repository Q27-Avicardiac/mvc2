const sequelize = require('./pg').s
const Sequelize = require('./pg').S
const Course = require('./course')
const Student = require('./student')

const Enrollment = sequelize.define('enrollments', {
    enrollment_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    graded: {
        type: Sequelize.NUMBER,
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: Course,
            key: 'course_id'
        }
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
            model: Student,
            key: 'student_id'
        }
    }
}, {timestamps: false})

module.exports = Enrollment