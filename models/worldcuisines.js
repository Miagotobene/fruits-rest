const { localsName } = require("ejs");

const worldcuisines = [{
    name: 'Chicken Scampi Pasta',
    ingredient: 'Pasta',
    preptime: '30mn'
},
{
    name: 'Chicken Curry',
    ingredient: 'chicken',
    preptime: '45mn'
},
{
    name: 'Creamy Cajun Potato Soup',
    ingredient: 'potato',
    preptime: '30mn'
},

{
    name: 'Baked Salmon',
    ingredient: 'salmon',
    preptime: '30mn'
},
{
    name: 'Shrimp Gumbo',
    ingredient: 'shrimp',
    preptime: '30mn'
}
];
// export file

module.exports = {
    worldcuisines,
}

// import into another file