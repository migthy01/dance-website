const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

//EXPRESS RELATED STUFF
app.use('/static',express.static('static')) //serving static files

//PUG RELATED STUFF
app.set('view engine', 'pug') //set the templet engine
app.set('views',path.join(__dirname,'views')) //set the view directory

//END POINTS
app.get('/',(req,res)=>{
    const con = "this is the best content of the internet "
    const params = {'title' : 'pug is the best game' , "content": con }
    res.status(200).render('index.pug',params);
})


//START THE SERVER
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
})


