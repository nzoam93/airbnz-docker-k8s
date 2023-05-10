# Use an official Node.js image as the base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /frontend_app

##########note that this assumes that npm run build was done beforehand in the directory to create the /build folder!


#Note: we do NOT want to copy the package-lock.json because that is more specific (and may not work for all architectures)
# COPY package.json ./

# # Install dependencies
# RUN npm install 

# RUN npm install -g serve

# Copy the rest of the application code to the container
# COPY public/ ./public
# COPY src ./src 
# COPY build ./webapp 
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html
#the build command assume that you have run npm run build on the local computer

# Expose the port where the application will run
EXPOSE 80

# Start the application
CMD ["nginx", "-g", "daemon off;"]
