const db = require('../config/db');
const util = require('util');

const query = util.promisify(db.query).bind(db);

const getAll = async (limit = 100) => {
    try {
        const results = await query('SELECT * FROM user_channel_chat LIMIT ?', [limit]);
        return results;
    } catch (err) {
        console.error('Database query error:', err);
        throw new Error('Failed to retrieve data from the database');
    }
};

module.exports = {
    getAll,
};
