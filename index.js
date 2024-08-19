
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const routes = require('./routes');
const { swaggerUi, specs } = require('./config/swagger');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.log('Error: ' + err);
  });
});

module.exports = app; 

