#  Create a new image from the base nodejs 7 image.
FROM node:7

# Create the target directory in the imahge
RUN mkdir -p /usr/src/apoNode

# Set the created directory as the working directory
WORKDIR /usr/src/appNode

# Copy the package.json inside the working directory
COPY package.json /usr/src/appNode

# Install required dependencies
RUN npm install

# Copy the application source files.
COPY . /usr/src/appNode

# Install nodemon
RUN npm install nodemon

# Open 3000 port. This is the port that our development server uses
EXPOSE 3000

# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]
