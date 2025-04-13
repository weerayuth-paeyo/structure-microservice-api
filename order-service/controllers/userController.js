const User = require('../models/userModel');

getAllUsers = async (req, res) => {
    try {
        const users = await User.getAll()
        res.json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    getAllUsers,
};
