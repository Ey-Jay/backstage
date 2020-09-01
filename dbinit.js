require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL);

const Tour = sequelize.define(
  'Tour',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
    },
    band: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shows: {
      type: DataTypes.ARRAY,
      defaultValue: [],
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {}
);

const Show = sequelize.define(
  'Show',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    city: {
      type: DataTypes.STRING,
    },
    venue: {
      type: DataTypes.STRING,
    },
    support: {
      type: DataTypes.ARRAY,
      defaultValue: [],
    },
  },
  {}
);

sequelize.sync();

module.exports = { sequelize };
