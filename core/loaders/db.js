const mongoose = require('mongoose')
const { Sequelize } = require('sequelize')


const db = mongoose.connection;
const sequelize = new Sequelize('MediumCloneDB', 'postgres', 'acanakdas', {
    host: 'localhost',
    dialect: "postgres"
});
// db.once("open", () => {
//     console.log("Successfully connected to database")
// })

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    // await mongoose.connect(process.env.MONGO_DB_PATH, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })
}

module.exports = {
    connectDB,
    sequelize
} 