# Stage 1: Build the React app with Vite
FROM node:20 AS build

# Create and change to the app directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the built app with a lightweight web server
FROM nginx:alpine

# Copy the built files from the previous stage to the NGINX public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that NGINX runs on
EXPOSE 3000

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
