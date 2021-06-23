module.exports = (sequelize, Sequelize) => {
  const Chart = sequelize.define('chart', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    gender: {
      type: Sequelize.ENUM('M', 'F'),
      allowNull: false,
    },
  });

  return Chart;
};
