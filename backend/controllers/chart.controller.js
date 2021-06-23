const db = require('../models');
const Chart = db.charts;
const Op = db.Sequelize.Op;

// Using async and await makes asynchronous code looks like synchronous code. This makes code much cleaner
exports.ageGroup = async (req, res) => {
  const youngAdultsPromise = Chart.findAll({
    where: {
      age: {
        [Op.between]: [0, 35],
      },
    },
  });

  const adultsPromise = Chart.findAll({
    where: {
      age: {
        [Op.between]: [36, 50],
      },
    },
  });

  const seniorsPromise = Chart.findAll({
    where: {
      age: {
        [Op.gte]: 51,
      },
    },
  });

  const [youngAdults, adults, seniors] = await Promise.all([
    youngAdultsPromise,
    adultsPromise,
    seniorsPromise,
  ]);

  res.status(200).json({
    youngAdults,
    adults,
    seniors,
  });
};

exports.genderRatio = async (req, res) => {
  const malePromise = Chart.findAll({
    where: {
      gender: 'M',
    },
  });

  const femalePromise = Chart.findAll({
    where: {
      gender: 'F',
    },
  });

  const [male, female] = await Promise.all([malePromise, femalePromise]);

  res.status(200).json({
    male,
    female,
  });
};

exports.create = async (req, res) => {
  const { name, age, gender } = req.body;

  let chart;

  try {
    chart = await Chart.create({
      name,
      age,
      gender,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.status(201).json({ chart });
};

exports.getAll = async (req, res) => {
  const charts = await Chart.findAll();
  res.status(200).json({
    charts,
  });
};
