const Course = require('../../models/course')

module.exports.delete_course = (req, res) => {
    let course_id = req.params.course_id
    Course.destroy({
        where: {
            course_id: course_id
        }
    })
    .then(() => {
        res.redirect('/enrollment/list_course')
    })
}