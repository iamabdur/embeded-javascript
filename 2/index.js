
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your HTML form (assuming you have an HTML file named "form.html")
app.get('/', (req, res) => {
    res.render('index.ejs')
  
});

// Handle form submission
app.post('/submit', (req, res) => {
 // Extract firstname and lastname from the request body
 const  firstname= req.body['firstname'].length;
 const lastname=req.body['lastname'].length;

 // You can now use `firstname` and `lastname` as needed
 

 // Respond to the user
 const total = firstname + lastname;
 res.render('index.ejs', {total});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});