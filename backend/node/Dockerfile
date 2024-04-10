# Base image
FROM node:18.16.0

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

RUN npm rebuild bcrypt --build-from-source

# Expose port
EXPOSE 5000

# Start the backend app
CMD ["node", "server.js"]