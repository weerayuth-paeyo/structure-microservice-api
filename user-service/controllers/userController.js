const UserModel = require('../models/userModel');

getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const result = await UserModel.getAll(limit, offset);

        res.json({
            success: true,
            data: result.data,
            meta: {
                page,
                limit,
                total: result.meta.total,
                totalPages: result.meta.totalPages,
            },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    getAllUsers,
};
