const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();


app.get('/users', async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const response = await axios.get(`${process.env.SERVICE_USER_URL}/api/v1/list`, {
            params: { page, limit },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.SERVICE_ORDER_URL}/api/v1/list`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching orders');
    }
});

// app.get('/user-orders', async (req, res) => {
//     try {
//         const [usersRes, ordersRes] = await Promise.all([
//             axios.get('http://user-service:3001/users'),
//             axios.get('http://order-service:3002/orders')
//         ]);
//
//         const users = usersRes.data;
//         const orders = ordersRes.data;
//
//         // รวมข้อมูล user กับ order ตาม userId
//         const result = users.map(user => {
//             const userOrders = orders.filter(order => order.user_id === user.id);
//             return {
//                 ...user,
//                 orders: userOrders
//             };
//         });
//
//         res.json(result);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Error combining users and orders');
//     }
// });


app.listen(8080, () => {
    console.log('API Gateway is running on port 8080');
});
