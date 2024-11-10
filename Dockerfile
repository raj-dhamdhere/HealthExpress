# Use the official Node.js 20 image as the base image
FROM node:20.18.0

# Set working directory inside the container
WORKDIR /github/HealthExpress

# Copy the package.json files first to utilize Docker cache
COPY Backend/package*.json ./Backend/
COPY client/package*.json ./client/

# Install backend dependencies
WORKDIR /github/HealthExpress/Backend
RUN npm install

# Install frontend dependencies
WORKDIR /github/HealthExpress/client
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the frontend (optional, depending on your project)
RUN cd /github/HealthExpress/client && npm run build

# Expose the ports your app runs on (adjust if necessary)
EXPOSE 3000 3001

# Define the command to run both backend and frontend
CMD pm2 start /app/Backend/index.js --name "app-backend" && \
    cd /github/HealthExpress/client && npm start
