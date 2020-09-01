const { Show } = require('../dbinit');

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

  try {
    const show = await Show.findByPk(id);
    res.json(show);
  } catch (e) {
    console.error(e);
    res.send("That didn't work – woopsie!");
  }
};

module.exports = {
  getShows,
  getShow,
};
