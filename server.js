const app = require('./app')
const DBConnection = require('./config/database')
require('dotenv').config({ path: 'config/config.env' })

DBConnection()

app.listen(process.env.PORT, () => {
    console.log(`server running on port ::: ${process.env.PORT} in ${process.env.NODE_ENV} environment`)
})

// 7EJi4kGCmvuqbG2M

// mongodb+srv://ecommerce:7EJi4kGCmvuqbG2M@cluster0.bd4qz.mongodb.net/ecommerce?retryWrites=true&w=majority