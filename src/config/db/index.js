
const mongoose = require('mongoose');

async function connect() {
    // try {
    //     await mongoose.connect('mongodb://127.0.0.1:27017/blog_education_dev', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true
    //     });
    //     console.log("Connect successfully@@!!!")
    // } catch (error) {
    //     console.log("Connect failure@@!!!")
    // }

    mongoose
        .connect(`mongodb://127.0.0.1:27017/blog_education_dev`)
        .then(() => {
            useNewUrlParser: true
            useUnifiedTopology: true
            useCreateIndex: true
            console.log('MongoDB connected!!')
        })
        .catch(err => {
            console.log('Failed to connect to MongoDB', err)
        })
}

module.exports = { connect }