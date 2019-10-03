const Course = require('../../models/course')

module.exports.print_course = (req, res) => {
    let course_id = req.params.course_id
    Course.findAll({
        where: {
            course_id: course_id
        }
    })
    .then(result => {
        res.render('editform/enrollment_edit_course', {
            result
        })
    })
}