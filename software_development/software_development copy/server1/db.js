const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb://localhost:27017/test');
        console.log(`MongoDB Connected changed`);
    } catch(error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;