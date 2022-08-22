/**
 * to do:
 * - add other third party api
 * - handle file extension inlcusions
 */

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: '*'}));

app.use(cors({credentials: true, origin: true}));

// app.options("/*", function(req, res, next){
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.header('Access-Control-Allow-Credentials', true);

//     res.send(200);
// });

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });


app.get("/", (req,res)=>{
    res.send("Sales and inventory system api");
});

app.use('/uploads', express.static('./uploads'));

const customerRouter = require('./src/routes/customerRoute.js');
app.use('/customers', customerRouter);

const claimRouter = require('./src/routes/claimRoute');
app.use('/claims',claimRouter);

const vechicleRouter = require('./src/routes/vehicleRoute');
app.use('/vehicles',vechicleRouter);

app.listen(process.env.PORT || 3000, () => console.log(`server started`));


