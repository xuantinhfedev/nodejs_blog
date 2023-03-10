const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Course.find({})
            .then(course => {
                res.render('me/stored-courses', {
                    deletedAt: true,
                    course: mutipleMongooseToObject(course)
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(course => {
                res.render('me/trash-courses', {
                    deletedAt: true,
                    course: mutipleMongooseToObject(course)
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
