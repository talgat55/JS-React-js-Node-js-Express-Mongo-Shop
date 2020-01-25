const  express  = require('express');
const config = require('config');
const mongoose  = require('mongoose');
const path  = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = config.get('port')  || 5000;
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));


if(process.env.NODE_ENV === 'production'){
    app.use( '/', express.static(path.join(__dirname, 'client' , 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
async function start () {
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }catch (e) {
        console.log( 'Server Error', e.message);
        process.exit(1);
    }
}

start ();

app.listen(PORT, () => console.log(` app server has run  on port ${PORT}`));
