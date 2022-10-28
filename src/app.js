const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


//middlewares
app.use(express.json());
app.use(cors());

//routes
const jobRoute = require('../routes/job.route')
  const candidateRoute = require('../routes/candidate.route')
 const hirringManagerRoute = require('../routes/manager.route')
 const userRoute  = require('../routes/user.route')

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


    // get data
    app.use('/api/v1/jobs', jobRoute )
    app.use('/api/v1/manager/jobs', hirringManagerRoute)
    app.use('/api/v1/candidate', candidateRoute)
    app.use("/api/v1/user", userRoute);



module.exports = app;