const bcrypt = require('bcrypt');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

const checkPassword = (password, passwordDb) => {
  const isMatch = bcrypt.compareSync(password, passwordDb);
  if (!isMatch) {
    const error = new Error('Invalid password');
    error.code = 'Unauthorized';
    throw error;
  }
  return true;
};

module.exports = {
  encryptPassword,
  checkPassword
}
