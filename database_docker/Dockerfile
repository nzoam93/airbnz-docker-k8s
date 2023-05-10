# Use an official PostgreSQL image as the base image
FROM postgres:13-alpine

# Set the environment variables for PostgreSQL. This isn't needed here because I will be doing the environment variables in the docker-compose file
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=myairbnzdb

# Expose the default PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL service
CMD ["postgres"]