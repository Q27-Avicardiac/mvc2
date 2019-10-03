const Student = require('../../models/student')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports.search = (req, res) => {
    res.render('search')
}

module.exports.query = (req, res) => {
    let {search} = req.body

    Student.findAll({
        where: {
            [Op.or]: [{
                last_name: {[Op.like]: '%' + search + '%'}
            }, {
                first_name: {[Op.like]: '%' + search + '%'}
            }]
        }
    })    
    .then(result => {res.render('enrollment_list_search', {
        result
    })})
    .catch(err => {
        console.log(err)
    })
}