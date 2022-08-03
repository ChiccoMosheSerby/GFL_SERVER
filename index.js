const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//ROUTERS/////////////////////////////////////////////////////////////////////////////

//branches route---------------
// const home = require('./routes/home');
// app.use("/", home);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
// // menu route------------------
// const menuRouter = require('./routes/menuRouter');
// app.use("/menu", menuRouter);

// // newOrder route
// const ordersRouter = require('./routes/ordersRouter');
// app.use("/newOrder", ordersRouter);

// // update order status route
// const updateOrdersListRouter = require('./routes/updateOrdersListRouter');
// app.use("/updateOrdersList", updateOrdersListRouter);

// // show order status route
// const orderStatusToShowRouter = require('./routes/orderStatusToShowRouter');
// app.use("/orderStatusToShow", orderStatusToShowRouter);

// //get Order List
// const getOrderListRouter = require('./routes/getOrderListRouter');
// app.use("/getOrderList", getOrderListRouter);

//END ROUTERS/////////////////////////////////////////////////////////////////////////////


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 4003;
app.listen(port, function () {
    console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})

//connect mongoDB---------------------------------------------------------------
// const mongoose = require('mongoose');//npm i mongoose
// const url = process.env.MONGODB_URI;
//TODO
// mongoose.connect(url);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('------------------------------> DB conected as well! <---------------------');
// });
////////// END conections /////////////////////////////////////////////////////////////////////////////
