const express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
 // res.send('<h1>Olá Fullstack Lab</h1>');
   res.render('home')  
})

app.get('/vaga', (req, res) => {
  // res.send('<h1>Olá Fullstack Lab</h1>');
    res.render('vaga')  
 })

app.listen(3333, () => {
  console.log('*** Olá Fullstack Lab listening on http://localhost: 3333');
})