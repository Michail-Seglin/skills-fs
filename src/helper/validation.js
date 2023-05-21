function isValidSkill(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id must number');
  if (id < 0) throw new Error('id > 0 ');

  next();
}

function isValidTitle(req, res, next) {
  const { title } = req.body;
  if (!title) throw new Error('your title is empty');
  if (!isNaN(title)) throw new Error('your title is number ');

  next();
}

module.exports = { isValidSkill, isValidTitle };
