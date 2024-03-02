const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Abhinav:gbGy07EeiwiNvhTe@cluster0.urvmp8c.mongodb.net/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;