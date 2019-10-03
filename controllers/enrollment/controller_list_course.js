const Course = require('../../models/course')

module.exports = (req, res) => {
    Course.findAll() 
    .then(result => {
        res.render('enrollment_list_course', {
            result
        })
    })
}