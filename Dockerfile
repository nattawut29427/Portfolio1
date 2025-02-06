# ใช้ Node.js เป็น base image
FROM node:18

# กำหนด working directory
WORKDIR /app

# Copy package.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy ไฟล์โปรเจกต์ทั้งหมด
COPY . .

# Build Next.js
RUN npm run build

# รัน Next.js บน port 3000
CMD ["npm", "start"]
