const express = require('express');

const path = require('path')

const bodyParser = require('body-parser')



const app = express();

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extend: true
}));




let tasks = ['clean my room', 'get high'];

app.get('/',(req,res)=>{

    res.render('index.ejs',{tarefas:tasks});


});



app.post("/",(req, res)=>{
    tasks.push(req.body.task)
    res.render('index.ejs',{tarefas:tasks});
})


app.get('/deletar/:id',(req,res)=>{
    tasks = tasks.filter(function(val,index){
    if(index != req.params.id){
        return val;
    }
})
res.render('index.ejs',{tarefas:tasks});
});


app.listen(3000,()=>{
console.log('Hello, world');
})