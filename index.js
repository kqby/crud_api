const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environment = require('./environements');

const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const carRoutes = require('./routes/car-routes');

const error = require('./middleware/error');
const winston = require('winston');
const app = express();


require('./startup/db')();
require('./startup/validation')();


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', authRoutes.routes);
app.use('/api',carRoutes.routes);

app.use(error);

app.listen(environment.port, () => winston.info('App listening on url: http://localhost:' + environment.port));
