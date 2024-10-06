const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    //    await mongoose.connect(process.env.DATABASE_URI);
        await mongoose.connect(process.env.DATABASE_URI, {
            "authSource": "admin",
            "user": process.env.DATABASE_USER,
            "pass": process.env.DATABASE_PASS
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;