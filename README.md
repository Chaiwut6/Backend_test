## สิ่งที่ใช้ในโปรเจกต์
- Node.js
- Express
- Sequelize
- MySQL (รันผ่าน Docker)
- Docker + Docker Compose

## โครงสร้างโปรเจกต์
- `models/` - Sequelize models 
- `routes/` - เส้นทาง API 
- `controllers/` - ตัวควบคุมการทำงานของแต่ละ route
- `seeders/seed.js` - สคริปตัวอย่างข้อมูล
- `app.js` - ไฟล์เริ่มของ Node.js backend
- `docker-compose.yml` - คำสั่งสำหรับรัน container ของ backend และฐานข้อมูล

## การติดตั้งและรันโปรเจกต์
- ติดตั้ง Docker
- Clone โปรเจกต์
- ตั้งค่า .env
    DB_HOST=db
    DB_PORT=3306
    DB_USER=root
    DB_PASS=rootpassword
    DB_NAME=crypto_exchange
    PORT=3000
- docker-compose up --build
- docker backend node seeders/seed.js