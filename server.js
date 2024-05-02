const express = require('express');
const app = express(); // our app
const PORT = process.env.PORT || 3000;
const methodOverride = require('nethod-override')

// ------------ DATA ----------------- //
// inside of fruits.js
const { fruits } = require('./models/fruits');

// inside of veggies and meats
const { veggies } = require('./models/veggies');
const { meats } = require('./models/meats');
const { recipes } = require('./models/recipes');
const {about} = require('./models/about');



// ------------ MIDDLEWARE ------------ static files ----------------- //
app.use(methodOverride('_method'));
app.set('view engine', 'ejs'); // come back to this
app.use('/', express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.json());
app.use(express.urlencoded({extended: true}));

// addle middle for PUT and Delete methods



// ------------ ROUTES ---------------


// ******* INDEX ROUTE **********
app.get('/fruits', (req, res) => {
    // send index.ejs with array of fruits
    res.render('fruits/index', { fruits });
});

app.get('/fruits/new', (req,res) =>{
    res.render('fruits/new.ejs', {});
});

// --------------------------------- New Routes Here ------------------------------------------------- //
// Home Page Here
const homePage = require('./models/homepage');
app.use('/home', homePage);

// Recipe Page Here

app.get('/recipes', (req,res) =>{
    res.render('recipes/index', { recipes });
});

app.get('/recipes/:index', (req,res)=>{
    let index = parseInt(req.params.index);
    if(index >= recipes.length){
        res.render('404', {});
    } else{
        res.render('recipes/show', recipes[index])
    }
});

// About Page Here
app.get('/about', (req,res) =>{
    res.render('about/index', { about });
});

app.get('/about/:index', (req,res)=>{
    let index = parseInt(req.params.index);
    if(index >= about.length){
        res.render('404', {});
    } else{
        res.render('about/show', about[index])
    }
});


// ------------------------- Exercise ------------------------------ //
// 1.add routes for /veggies , /veggies/:id
app.get('/veggies', (req,res)=>{
    console.log(veggies);
    res.render('veggies/index', {veggies})
});

app.get('/veggies/:index', (req,res)=>{
    let index = parseInt(req.params.index);
    if(index >= veggies.length){
        res.render('404', {});
    } else{
        res.render('veggies/show', veggies[index])
    }
});

// 2. add routes for /meats , /meats/:id

app.get('/meats', (req,res)=>{
    console.log(meats);
    res.render('meats/index', {meats})
});

app.get('/meats/:index', (req,res)=>{
    let index = parseInt(req.params.index);
    if(index >= meats.length){
        res.render('404', {});
    } else{
        res.render('meats/show', meats[index])
    }
});
// ******* SHOW ROUTE **********
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfFruitsArray);
    if (idx >= fruits.length) {
        // res.send('There is no fruit at that index.'); // one solution
        // res.send(fruits);
        res.render('404', {});
    } else {
        // res.send(fruits[idx]);
        res.render('show', { fruit: fruits[idx], id: idx });
    }
});

// ********************** Get - EDIT PAGE ***********************

app.get('/fruits/:id/edit', (req, res) => {
    const fruit = fruits[req.params.id];
    let id = parseInt(req.params.id);
    res.render('fruits/edit', {fruit: fruit, id: id})

})


// ********************** Get - delete PAGE ***********************
app.get('fruits/:id/delete', (req,res)=>{
    const fruit = fruits[req.params.id];
    let id = parseInt[req.params.id];
    res.render

})


// ******* SHOW ROUTE **********
app.post('/fruits', (req,res) => {
    console.log('------------------------------Form Body------------------------------------\n', req.body);
    //add more code here
    if (req.body.readyToEat ==="on"){
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits')
})

// ******* PUT - UPDATE FRUIT **********
app.put('/fruits/:id', (req,res) =>{
    console.log('--------------------Update Fruit -----------------\n', req.body)
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false
    }
    fruits[parseInt(req.params.id)] = req.body;
    res.redirect('/fruits');
})

// ******* DELETE - DELETE FRUIT **********
app.delete('/fruits/:id', (req,res)=>{
    // remove the fruit item from the fruits array
    fruits.splice(paresInt(req.params.id),1);
    res.redirect('/fruits') // redirect back to index page
})


// ----------- LISTEN FOR SERVER ----------
app.listen(PORT, () => {
    console.log('🎧 Server is running on PORT 🎧', PORT);
});