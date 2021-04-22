require('./database');
const express = require('express');
const cors = require('cors');
const { ValidationError } = require('express-validation');
const app = express();
const routes = require('./routes');





app.use(cors());
app.use(express.json());
app.use(routes);

app.use(function(err, req, res) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({error: 'an error occurred'});
    });

app.listen(3333, () => {
    console.log("Escutando porta 3333");
});
