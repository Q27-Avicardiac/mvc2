const Enrollment = require('../../models/enrollment')

module.exports = (req, res) => {
    Enrollment.findAll()
    .then(result => {
        res.render('enrollment_list_enrollment', {
            result
        })
    })
}
