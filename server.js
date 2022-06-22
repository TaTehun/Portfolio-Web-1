const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;

// Data parsing
app.use(express.urlencoded({
    extended: false
}));

app.post('/email', (req, res) => {
    const {name, email, text} = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, text, function(err, data){
        if (err) {
            res.status(500).json({ message: 'internal error'});
            } else {
                res.json({ message: 'Email Sent!!'});
            }
    });
});
//remove views from app.use('/views')
app.use('/', express.static(path.join(__dirname, 'views')));

app.engine('html', require('ejs').renderFile);



app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/contact', function(req, res) {
    res.render('contact_page.html');
});

app.listen(PORT, ()=> log('server is starting on PORT, ', 8080));
