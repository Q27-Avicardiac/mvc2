const Sequelize = require('./pg').S
const sequelize = require('./pg').s

const Course = sequelize.define('courses', {
    course_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(50)
    },
    credits: {
        type: Sequelize.INTEGER
    }
}, {timestamps: false})

module.exports = Course