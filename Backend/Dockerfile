# Step 1: Use official Node.js image
FROM node:20.18.0

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to use cached Docker layers for npm install
COPY Backend/package*.json ./Backend/

# Step 4: Install backend dependencies
RUN npm install

RUN npm install -g nodemon
# Step 5: Copy all the backend application files into the container
COPY Backend/ .

# Step 6: Expose the port the backend will run on (typically 3000 for Express)
EXPOSE 3001

# Step 7: Define the command to run the backend
CMD ["nodemon", "index.js"]
