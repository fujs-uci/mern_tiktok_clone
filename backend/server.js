import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Data from './data.js';
import Videos from './dbModel.js'


// app config 
const app = express();
const port = process.env.PORT || 9000;

// middlewares 
app.use(express.json());
app.use(cors());

// db config
const db_connection = ""

mongoose.connect(db_connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

app.get('/v1/posts/', (req, res) => {
    res.status(200).send(Data);
});

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listener
app.listen(port, () => console.log(`Listening on port ${port}`));