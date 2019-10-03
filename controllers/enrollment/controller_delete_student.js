let Student = require('../../models/student')

module.exports.delete_student = (req, res) => {
    let student_id = req.params.student_id
    Student.destroy({
        where: {
            student_id: student_id
        }
    })
    .then(() => {
        res.redirect('/enrollment/list_student')
    })
}