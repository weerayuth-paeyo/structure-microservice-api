require('dotenv').config();
const mysql = require('mysql');

// สร้างการเชื่อมต่อกับฐานข้อมูล MySQL โดยใช้คอนฟิกจาก .env
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10, // เพิ่มการควบคุมจำนวนการเชื่อมต่อพร้อมกัน
    connectTimeout: 10000 // ตั้ง timeout สำหรับการเชื่อมต่อ (มิลลิวินาที)
};

let connection;

function handleDisconnect() {
    try {
        connection = mysql.createConnection(dbConfig);

        connection.connect((err) => {
            if (err) {
                console.error('Failed to connect to database:', err.stack);
                setTimeout(handleDisconnect, 2000); // ลองเชื่อมต่อใหม่หลังจาก 2 วินาที
            } else {
                console.log('Database connected successfully.');
            }
        });

        // จัดการข้อผิดพลาดที่เกิดจากการเชื่อมต่อที่หลุด
        connection.on('error', (err) => {
            console.error('Database connection error:', err);

            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.log('Reconnecting to the database...');
                handleDisconnect(); // เชื่อมต่อใหม่ถ้าการเชื่อมต่อขาด
            } else {
                throw err; // หากเป็นข้อผิดพลาดอื่น ให้โยนข้อผิดพลาด
            }
        });
    } catch (error) {
        console.error('Unexpected error during database connection setup:', error);
        setTimeout(handleDisconnect, 2000); // ลองเชื่อมต่อใหม่หลังจาก 2 วินาที
    }
}

// เริ่มต้นการเชื่อมต่อ
handleDisconnect();

module.exports = connection;
