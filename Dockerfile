# Use Node.js as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /src

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose port 8081 for the Metro bundler
EXPOSE 8081

# Command to start the Metro bundler
CMD ["npx", "react-native", "start"]