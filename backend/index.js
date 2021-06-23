const express = require('express');
const cors = require('cors');
const db = require('./models');
const chartsRouter = require('./routes/chart.routes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  // seed data if there is no row in the table
  // sequelize.sync is asynchronous and returns a promise. So I use .then() to do seed data after the promise is resolved
  require('./seeder');
});

app.use('/', chartsRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
