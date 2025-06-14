const jwt = require('../utils/jwt');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token requerido' });
  try {
    req.user = jwt.verify(token);
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido' });
  }
};