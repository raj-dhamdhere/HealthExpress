# Step 1: Use official Node.js image for frontend
FROM node:20.18.0 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for React app
COPY client/package*.json ./client/

# Step 4: Install frontend dependencies
RUN npm install

# Step 5: Copy all frontend application files into the container
COPY client/ .

# Step 6: Build the frontend React app for production
RUN npm run build

# Step 7: Serve the production build using a simple HTTP server (e.g., serve or nginx)
# Use `serve` for simplicity in serving React app, or configure Nginx in case you want more control.
RUN npm install -g serve

# Step 8: Expose the React app port (default: 3000)
EXPOSE 3000

# Step 9: Command to serve the built React app
CMD ["serve", "-s", "build"]
