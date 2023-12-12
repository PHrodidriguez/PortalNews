const express = require('express');

const path = require('path')

const bodyParser = require('body-parser')

const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('pages', path.join(__dirname, '/pages'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: true
}));


app.get('/',(req,res)=>{

if(req.query.busca == null){
    res.render('../pages/home.ejs',{})
}else{
    res.render('../pages/home.ejs',{});
}

})



app.get('/:slug',(req, res)=>{
    //res.send(req.params.slug)
    res.render('../pages/single.ejs',{});


})


app.listen(5000,()=>{
console.log('Hello, world');
})