const sequelize = require('../dbinit');

const getTours = async (req, res, next) => {
  // try {
  //   const data = await db.query('SELECT * FROM users;');
  //   res.json(data.rows)
  // } catch(err) {
  //   next(err)
  // }
};

const getTour = (req, res, next) => {
  // const { id } = req.params;
  // db
  //   .query("SELECT * FROM users WHERE id=$1;", [id])
  //   .then(data => res.json(data.rows))
  //   .catch(e => next(e));
};

module.exports = {
  getTours,
  getTour,
};
