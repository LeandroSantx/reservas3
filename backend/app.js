var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');
var clientesRouter = require('./routes/rotaclientes');
var funcRouter = require('./routes/rotafuncionarios');
var salaRouter = require('./routes/rotassalas');
var reservaRouter = require('./routes/rotareservas');


var app = express();

require('dotenv').config({path: __dirname + '/.env' })


// CORS
app.use(cors({origin:'http://localhost:3000'}));
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/apiclientes', clientesRouter);
app.use('/apifuncionario', funcRouter);
app.use('/apisala', salaRouter);
app.use('/apireserva', reservaRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
