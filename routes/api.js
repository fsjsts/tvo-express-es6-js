import express from "express";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

const weatherHistory = [];

// home page
router.get('/', (req, res) => {
    res.send('This is my server using the ES6 syntax')
});


// GET all items
router.get("/weather", (req, res) => {
    res.json(weatherHistory);
});

// POST endpoint to save weather history
router.post('/weather', (req, res) => {
    const { city, temperature, date, time } = req.body;
    const newWeatherData = { city, temperature, date, time };
    weatherHistory.push(newWeatherData);
    res.status(201).json(newWeatherData);
});


export default router;