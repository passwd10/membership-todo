const db = require('../models/index');
const query = require('../utils/queries');

const getUid = async (userId) => [...await db.execute(query.getUID, [userId])][0][0].uid;

const getRandomId = () => Math.floor(Math.random() * 1000);

module.exports = { getUid, getRandomId };
