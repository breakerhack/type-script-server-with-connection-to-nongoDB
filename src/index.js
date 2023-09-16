const cors = require('cors');
const express = require("express");
const app = express();

const indexRoutes = require('./routes/index');

//setting
app.set('port',process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//meadleawers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use(indexRoutes);

app.listen(app.get('port'),()=>{


    


    console.log('dddl')


});