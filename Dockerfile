# Stage 1: Build Stage
FROM node:18 AS build

# กำหนด working directory
WORKDIR /app

# Copy package.json และ package-lock.json
COPY package.json package-lock.json ./

# ติดตั้ง dependencies
RUN npm install

# Copy ไฟล์โปรเจกต์ทั้งหมด
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Production Stage
FROM node:18 AS production

# กำหนด working directory
WORKDIR /app

# Copy dependencies ที่ติดตั้งจาก build image
COPY --from=build /app /app

# ให้ production ใช้ `npm run start`
CMD ["npm", "start"]

# Expose port 3000
EXPOSE 3000
