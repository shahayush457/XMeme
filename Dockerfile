FROM ubuntu:latest

# change user to root and set working directory
USER root
WORKDIR /home/app

# install nodejs and npm
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# install MongoDB
RUN apt-get install -y mongodb

COPY ./backend/package*.json ./

# install dependencies
RUN npm install

# Copy source code to working directory
COPY ./backend .

# Execute permission for run_docker script
RUN chmod +x run_docker.sh

# Expose the required ports
EXPOSE 27017
EXPOSE 8081
EXPOSE 8080

# Run the script while starting the container
CMD [ "sh", "run_docker.sh" ]
