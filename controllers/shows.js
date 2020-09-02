const { Show } = require('../dbinit');
const { Op } = require('sequelize');

const getShows = async (req, res, next) => {
  try {
    const shows = await Show.findAll();
    res.json(shows);
  } catch (e) {
    console.error(e);
    res.send("That didn't work – woopsie!");
  }
};

const getShow = async (req, res, next) => {
  const { id } = req.params;

  const idArray = id.split(',');

  try {
    const shows = await Show.findAll({
      where: {
        id: {
          [Op.or]: [...idArray],
        },
      },
    });
    res.json(shows);
  } catch (e) {
    console.error(e);
    res.send("That didn't work – woopsie!");
  }
};

module.exports = {
  getShows,
  getShow,
};
