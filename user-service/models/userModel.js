const db = require('../config/db');
const util = require('util');
const query = util.promisify(db.query).bind(db);

const getAll = async (limit = 10, offset = 0) => {
    const sql = 'SELECT * FROM user_channel_chat LIMIT ? OFFSET ?';
    const sqlCount = 'SELECT COUNT(*) AS total FROM user_channel_chat';

    const [data, countResult] = await Promise.all([
        query(sql, [limit, offset]),
        query(sqlCount),
    ]);

    const total = countResult[0].total;
    const totalPages = Math.ceil(total / limit);

    return {
        data,
        meta: {
            total,
            totalPages,
        }
    };
};

module.exports = {
    getAll,
};
