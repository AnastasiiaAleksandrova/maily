const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const coockieSession = require('cookie-session');
const passport = require('passport');


const app = express();

app.use(coockieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.catch(err => console.log(err));
mongoose.connection.on('connected', () => console.log('connected to database'));
mongoose.connection.on('disconnected', () => console.log('OMG not connected'));

require('./models/User');

require('./services/passport');




require('./routs/authRouts')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('yes, mam'));


