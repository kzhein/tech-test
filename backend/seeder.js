const db = require('./models');
const Chart = db.charts;
const people = require('./people.json');

Chart.findAll().then(charts => {
  if (charts.length === 0) {
    Chart.bulkCreate(people).then(() =>
      console.log('data successfully seeeded')
    );
  }
});
