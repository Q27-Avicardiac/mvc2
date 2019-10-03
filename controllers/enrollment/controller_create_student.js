let Student = require('../../models/student')
let {check, validationResult} = require('express-validator')

module.exports.createstudent = (req, res) => {
    res.render('createform/enrollment_form_student')
}

module.exports.create_process_student = [
    check('last_name').not().isEmpty().withMessage('Enter last name').escape(),
    check('first_name').not().isEmpty().withMessage('Enter pass word').escape(),
    check('enrollment_date').not().isEmpty().withMessage('Enter enrollment date'), 
    (req, res) => {
        let {last_name, first_name, enrollment_date} =  req.body
        let errors = validationResult(req)
        if(errors.isEmpty()){
            Student.create(
                {last_name: last_name, first_name: first_name, enrollment_date: enrollment_date}
            )
            .then(result => {
                res.redirect('/enrollment/list_student')
            })
        } else {
            res.render('createform/enrollment_form_student')
        }
}] 
    