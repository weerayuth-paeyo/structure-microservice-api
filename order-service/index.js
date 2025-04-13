const express = require('express');
const apiRoutes = require('./routes/api');
const cors = require('cors');

const app = express();
const port = 3002;

// Use CORS middleware
app.use(cors({
    origin: [
        // 'http://localhost:2998',
    ] // Allow requests from this origin
}));

// ใช้ body-parser middleware เพื่อ parse JSON data
app.use(express.json());

app.use('/api/v1', apiRoutes);

app.listen(port, () => {
    console.log(`The server runs at http://localhost:${port}`);
});
