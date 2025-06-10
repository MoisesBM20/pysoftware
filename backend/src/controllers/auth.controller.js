const db = require('../models');
const hashUtil = require('../utils/hash');
const jwtUtil = require('../utils/jwt');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await db.User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: 'Email ya registrado' });
    const user = await db.User.create({
      name,
      email,
      password: hashUtil.hash(password)
    });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ message: 'Error en el registro', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user || !hashUtil.compare(password, user.password))
      return res.status(401).json({ message: 'Credenciales inválidas' });
    const token = jwtUtil.sign({ id: user.id, email: user.email });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Error en el login', error: err.message });
  }
};