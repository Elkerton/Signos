var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    TodoModel = require('./models/signoModel');

var app = express();

app.set('view engine', 'ejs');  
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signos', (req, res) => {
    TodoModel.find({}).exec((err, data) => {
        if(!err)
            res.json(data);
        else
            res.json(err);
    });
});

app.post('/signos', (req, res) => {
console.log(req.body)
    var name = req.body.nome;
    var signo = req.body.signo;
    var t = new TodoModel({ nome : name, signo : signo});
    t.save((err) => {
        if(!err)
            res.json(name);
    });   

});



app.post('/signos/:id', (req, res) => {
    req.params
})

app.listen(3002, () => {
    console.log('listening in ' + 3002);

    mongoose.connect('mongodb://187.84.234.178/signos');
});
