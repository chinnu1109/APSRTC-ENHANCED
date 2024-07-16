//mongodb+srv://jaswanth:<password>@sdb.euoq4do.mongodb.net/?retryWrites=true&w=majority&appName=sdb

const express = require('express')
const connectDB = require('./db.js')
const cors = require('cors')
const parcelRoutes = require('./router/parcelRoutes.js')
const feedbackRoutes = require('./router/feedbackRouter.js');

const app = express()
app.use(express.json())
app.use(cors())


connectDB()

app.use('/api', parcelRoutes);

app.use('/api', feedbackRoutes);
app.listen(3001,()=>{
    console.log("app is running");
})