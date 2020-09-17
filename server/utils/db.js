const db = require('../models/index');
const query = require('../utils/queries');

const getUid = async (userId) => [...await db.execute(query.getUID, [userId])][0][0].uid;

module.exports = { getUid };
