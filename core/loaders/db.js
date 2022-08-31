const { Sequelize } = require('sequelize')


const sequelize = new Sequelize("MediumCloneDB", 'postgres', 'acanakdas', {
    host: "localhost",
    dialect: "postgres"
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to Postgre has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    connectDB,
    sequelize
} 