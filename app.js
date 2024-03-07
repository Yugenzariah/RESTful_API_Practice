// Express gives our application a skeleton/structure.
const express = require('express'); // Load the express module.
const app = express(); // Calling the function and storing the result in a constant called "app".

const items = [
    { id: 1, name: 'Shampoo' }, 
    { id: 2, name: 'Body Soap' }, 
    { id: 3, name: 'Face cleanser' }, 
];

/* Below are the useful methods of the app object
app.get()
app.post()
app.put()
app.delete()
All these methods correspond to http methods 
*/ 

// Defining the main route:
app.get('/', (req, res) => { // This is a route handler
    res.send('Hello World');
});

/* You can define a new route by calling app.get */

// Here I have 2 endpoints which are listed below
// Defining a new route for getting the list of items
app.get('/product/items', (req, res) => {
    res.send(items);
});

// Defining a route where it gets a single item by calling the id of the item
// ":id" is the name of the parameter
// You can use more than one parameters
app.get('/product/items/:id', (req, res) => {
   const item = items.find(i => i.id === parseInt(req.params.id));
   if (!item) res.status(404).send('The item with the given ID was not found.') // If it doesnt find an item with a given id it should return a response http status code of 404 and gives the user a prompt.
   res.send(item);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));