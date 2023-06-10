// require('dotenv').config();
const express = require('express');
const path = require('path'); // inbuilt in node 
const port = 3000;
const app = express();
// const router = express.Router();
const db = require('./config/mongoose');


//testing to connect DB
// mongoose.connect("mongodb+srv://Himanshu0312:Himanshu0312@cluster0.mfvafuh.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log("DB Connected"))
//   .catch(() => console.log(err));







app.use(express.static("assets"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/users'));

// for user routes
const userRoute = require('./routes/userRoute');
app.use('/', userRoute);

// for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin', adminRoute);

app.get('/', function(req, res){
    return res.render('resources');
});

app.listen(port, function(err){
    if(err){
        console.log("error", err);
        return;
    }
    console.log('server is listening on port', port);
});
