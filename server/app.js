const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');

const indexRouter = require('./routes/index');
const boardsRouter = require('./routes/boards');
const signInRouter = require('./routes/signIn');
const signOutRouter = require('./routes/signOut');
const cardsRouter = require('./routes/cards');

const app = express();

app.use(logger('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signIn', signInRouter);
app.use('/signOut', signOutRouter);
app.use('/boards', boardsRouter);
app.use('/cards', cardsRouter);

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
