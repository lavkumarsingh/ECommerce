const app = require('./app')
require('dotenv').config({ path: 'config/config.env' })

app.listen(process.env.PORT, () => {
    console.log(`server running on port ::: ${process.env.PORT} in ${process.env.NODE_ENV} environment`)
})