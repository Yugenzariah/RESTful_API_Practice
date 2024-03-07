const express = require('express'); // Load the express module.
const app = express(); // Calling the function and storing the result in a constant called "app".

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

// Listen to a given port:
app.listen(3000, () => console.log('Listening on port 3000'));