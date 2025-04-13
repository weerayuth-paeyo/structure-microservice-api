FROM node:18

# ตั้ง working directory
WORKDIR /app

# คัดลอก package.json ก่อน เพื่อการติดตั้ง dependencies ที่รวดเร็วขึ้น
COPY package.json ./

# ติดตั้ง dependencies
RUN npm install

# ติดตั้ง nodemon เป็น devDependency
RUN npm install --save-dev nodemon

# คัดลอกไฟล์ทั้งหมดจาก local ไปยัง container
COPY . .

# ใช้ nodemon รันไฟล์ index.js
CMD ["npx", "nodemon", "index.js"]
