const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    { id: 1, name: 'fahim', email: 'fahim@gmail.com'},
    { id: 1, name: 'mahim', email: 'mahim@gmail.com'},
    { id: 1, name: 'hasib', email: 'hasib@gmail.com'},
    { id: 1, name: 'imaran', email: 'imaran@gmail.com'},
    { id: 1, name: 'farjanur', email: 'farjanur@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('user management is running')
} )

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})