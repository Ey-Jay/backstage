const { Tour } = require('../dbinit');

const getTours = async (req, res, next) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (e) {
    console.error(e);
    res.send("That didn't work – woopsie!");
  }
};

const getTour = async (req, res, next) => {
  const { id } = req.params;

  try {
    const tour = await Tour.findByPk(id);
    res.json(tour);
  } catch (e) {
    console.error(e);
    res.send("That didn't work – woopsie!");
  }
};

module.exports = {
  getTours,
  getTour,
};
