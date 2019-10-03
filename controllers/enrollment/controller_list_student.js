const Student = require('../../models/student')

module.exports = (req, res) => {
    Student.findAll() 
    .then(result => {
        res.render('enrollment_list_student', {
            result
        })
    })
}