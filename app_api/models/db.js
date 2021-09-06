const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://mobilerenalDB:admin123@cluster0.sai6h.mongodb.net/mobilerentalDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName:'mobilerentdb'});
require('./users');
require('./mobiles');
require('./customers');
require('./reviews');

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodmon restart', () => {
        process.kill(process.pid, 'SIGNUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});