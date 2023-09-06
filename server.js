const port = 1500;
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

app.get('/', (req, res) => { 
    res.send("It is sonus") 
});

app.listen(port, () => console.log(`Listening on port ${port}`));


