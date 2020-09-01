require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

const Tour = sequelize.define(
  'Tour',
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    band: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shows: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    name: DataTypes.STRING,
  },
  {}
);

const Show = sequelize.define(
  'Show',
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    date: DataTypes.DATE,
    city: DataTypes.STRING,
    venue: DataTypes.STRING,
    support: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  },
  {}
);

module.exports = { sequelize, Tour, Show };
