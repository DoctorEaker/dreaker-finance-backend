# Use the official Node.js image as the base image
FROM node:20.14.0

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install the dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application using pnpm
CMD ["pnpm", "start"]