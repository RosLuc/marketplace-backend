const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const error = require('./config/errorHandler');

require('./database/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3333, () => {
    console.log("Escutando porta 3333");
});
