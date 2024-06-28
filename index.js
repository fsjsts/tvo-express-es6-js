import express from "express";
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('This is my server using the ES6 syntax')
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})
