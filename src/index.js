const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const error = require('./config/errorHandler');
require("dotenv/config");

require('./database/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Escutando porta ${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> main
