const express = require('express');
//const mongoose = require('mongoose');
const keys = require('./config/keys');

//mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();




require('./services/passport');

//require('./models/User')


require('./routs/authRouts')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('yes, mam'));


