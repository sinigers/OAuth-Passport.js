const express = require('express');

const app = express();

// middleware
app.use(express.static('public'));

//set up view engine
app.set('view engine', 'ejs');

//create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening to requests on port 3000');
});
