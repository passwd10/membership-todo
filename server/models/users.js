const db = require('./index');

const getUser = async (userId, userPassword) => {
  try {
    const getUserQuery = `SELECT * FROM users WHERE user_id='${userId}' AND user_password='${userPassword}';`;
    const [rows] = await db.query(getUserQuery);
    const user = rows[0];
    return user;
  } catch (error) {
    console.log(Error(error));
  }
};

module.exports = { getUser };
