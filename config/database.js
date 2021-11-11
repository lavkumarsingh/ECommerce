const mongoose = require('mongoose')

const mongooseConnection = () => {
    mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Mongodb connected with host ${con.connection.host}`)
    })
}

module.exports = mongooseConnection