# Base image
FROM node:18.16.0

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install bcrypt --build-from-source

# Copy project files
COPY . /backend/node

# Expose port
EXPOSE 5000

# Start the backend app
CMD ["node", "server.js"]