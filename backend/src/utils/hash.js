const bcrypt = require('bcryptjs');

exports.hash = (password) => bcrypt.hashSync(password, 10);
exports.compare = (password, hash) => bcrypt.compareSync(password, hash);