let Course = require('../../models/course')
let {check, validationResult} = require('express-validator')

module.exports.createcourse = (req, res) => {
    res.render('createform/enrollment_form_course')
}

module.exports.create_process_course = [
    check('title').not().isEmpty().withMessage('Enter last name').escape(),
    check('credits').not().isEmpty().withMessage('Enter pass word').escape(),
    (req, res) => {
        let {title, credits} =  req.body
        let errors = validationResult(req)
        if(errors.isEmpty()){
            Course.create(
                {title: title, credits: credits}
            )
            .then(result => {
                res.redirect('/enrollment/list_course')
            })
        } else {
            res.render('createform/enrollment_form_course')
        }
}]
