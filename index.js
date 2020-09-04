const express = require('express'); 
const exphbs = require('express-handlebars');
const app = express(); 
const path = require('path');


app.set('port',process.env.PORT || 4000);

app.get('/', (req, res) =>{
    //res.send('Hello');
    res.sendFile(path. join(__dirname, 'index.html')); //'C:\Users\HP\Proyecto_Node/index.html');
});

app.get('/admin', (req, res) =>{
    res.render('./admin/index.hbs')
});

//MOTOR DE VISTAS HANDLEBARS

app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
defaultLayout: 'main',
extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.listen(app.get('port'), () =>{
    console.log('Servidor escuchando en el puerto: ', app.get('port'))
});  