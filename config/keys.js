if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev');
}


//prod connection URI: 'mongodb+srv://nastya:rBO3S2DmMgytARBx@cluster0-yedrw.mongodb.net/test?retryWrites=true&w=majority'
// prod googleClientID: '457226653203-s006p47vhc2o8dip67clqou6a20gusnt.apps.googleusercontent.com'
//prod googleClientSecret: 'a7mWRhNI1jOZ44re3z5ORou-'