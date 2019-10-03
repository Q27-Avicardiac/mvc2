const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT || 3000, () => {
    console.log('app running')
})

let index_controllers = require('./controllers/index')
let enrollment_index = require('./controllers/enrollment/controller_index')
let enrollment_list_student = require('./controllers/enrollment/controller_list_student')
let enrollment_list_enrollment = require('./controllers/enrollment/controller_list_enrollment')
let enrollment_list_course = require('./controllers/enrollment/controller_list_course')
let enrollment_controllers_createStudent = require('./controllers/enrollment/controller_create_student')
let enrollment_controllers_createCourse = require('./controllers/enrollment/controller_create_course')
let enrollment_controllers_deleteStudent = require('./controllers/enrollment/controller_delete_student')
let enrollment_controllers_deleteCourse = require('./controllers/enrollment/controller_delete_course')
let enrollment_controllers_search = require('./controllers/enrollment/controller_search')
let enrollment_controllers_editStudent = require('./controllers/enrollment/controller_edit_student')
let enrollment_controllers_editCourse = require('./controllers/enrollment/controller_edit_course')

app.get('/', index_controllers)
app.get('/enrollment', enrollment_index)
app.get('/enrollment/list_student', enrollment_list_student)
app.get('/enrollment/list_enrollment', enrollment_list_enrollment)
app.get('/enrollment/list_course', enrollment_list_course)

app.get('/enrollment/create_course', enrollment_controllers_createCourse.createcourse)
app.post('/enrollment/create_course', enrollment_controllers_createCourse.create_process_course)
app.get('/enrollment/create_student', enrollment_controllers_createStudent.createstudent)
app.post('/enrollment/create_student', enrollment_controllers_createStudent.create_process_student)

app.get('/enrollment/search', enrollment_controllers_search.search)
app.post('/enrollment/search', enrollment_controllers_search.query)

app.get('/edit/student/:student_id', enrollment_controllers_editStudent.print_student)
app.post('/edit/student/:student_id', enrollment_controllers_editStudent.edit_student)
app.get('/edit/course/:course_id', enrollment_controllers_editCourse.print_course)
app.post('/enrollment/edit/course', )

app.get('/delete/student/:student_id', enrollment_controllers_deleteStudent.delete_student)
app.get('/delete/course/:course_id', enrollment_controllers_deleteCourse.delete_course)
