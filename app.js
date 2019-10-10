'use strict'
//All Dependencies
const express = require('express')
const logger = require('morgan')
const mongoose = require("mongoose")
const bp = require('body-parser')

      //All Route Files
const routes = require('./routes/index')

      //Express Instance
const app = express()
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
//load environment variables with dotenv
require('dotenv').config()

mongoose.connect("mongodb+srv://mongoose:mongoose@hacktiv8-rfl9q.gcp.mongodb.net/flashpoint?retryWrites=true&w=majority", mongooseConfig, (err) => {
    if(err) console.log(err)
    console.log("Connect Database")
})

app.use(require('cors')())
app.use(logger('dev'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))
app.use('/', routes);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err =  new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//       message: err.message,
//       error: err
//     })
//   })
// }

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: {}
  })
})


module.exports = app
