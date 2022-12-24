const mongoose = require('mongoose')

//d

module.exports = () => {
    const connectionsParams = {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB, connectionsParams)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
        console.log('could not connect to database')
    }
}