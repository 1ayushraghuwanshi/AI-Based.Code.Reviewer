const express = require("express");
const aiRoutes = require('./routes/ai.route');
const cors = require('cors');


const app = express();
app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
    res.send("Hello World");
<<<<<<< HEAD
})
=======
});
>>>>>>> d26da18780f15dc7ee21e0bfd9807050f5d29f68

app.use('/ai', aiRoutes);

module.exports = app;
