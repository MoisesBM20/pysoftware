const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'secret';

exports.sign = (payload) => jwt.sign(payload, SECRET, { expiresIn: '1d' });
exports.verify = (token) => jwt.verify(token, SECRET);