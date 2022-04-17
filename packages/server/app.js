var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const pingRouter = require('./routes/ping');
const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');

var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

var router = express.Router();
router.use('/ping', pingRouter);
router.use('/registation', registrationRouter);
router.use('/login', loginRouter);

app.use('/api', router);

app.get('/**', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    const isDevelopment = req.app.get('env') === 'development';
    const message = isDevelopment ? err.message : 'Server';

    console.log(message);

    res.status(err.status || 500).send(message);
});

module.exports = app;
