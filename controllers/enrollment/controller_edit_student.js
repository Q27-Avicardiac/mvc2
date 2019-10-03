const Student = require('../../models/student')
const {check, validationResult} = require('express-validator')

module.exports.print_student = (req, res) => {
    let student_id = req.params.student_id
    Student.findAll({
        where: {
            student_id: student_id
        }
    })
    .then(result => {
        res.render('editform/enrollment_edit_student', {
            result
        })
    })
}

module.exports.edit_student = [
    // check('last_name').not().isEmpty().withMessage('Enter last name').escape(),
    // check('first_name').not().isEmpty().withMessage('Enter pass word').escape(),
    // check('enrollment_date').not().isEmpty().withMessage('Enter enrollment date'),
    (req, res) => {
        let {last_name, first_name, enrollment_date} =  req.body
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            console.log(req.params.student_id)
            
            Student.update({ 
                last_name: last_name,
                first_name: first_name,
                enrollment_date: enrollment_date
            }, { 
                where: {
                    student_id: student_id
            }})
            .then(result => {
                res.render('enrollment_list_student' , {
                    result
                })
            })

        } else {
            res.redirect('/enrollment/list_student')
        }
}]