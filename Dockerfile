FROM mongodb/mongodb-community-server:6.0-ubi8

# Set environment variables for MongoDB authentication
#ENV MONGO_INITDB_ROOT_USERNAME=dbUser
#ENV MONGO_INITDB_ROOT_PASSWORD=dbPassW0rd!


# Create a custom database during initialization
ENV MONGO_INITDB_DATABASE=testDatabase

# Create an admin user
ENV MONGO_INITDB_ADMIN_USERNAME=admin
ENV MONGO_INITDB_ADMIN_PASSWORD=AdminP@ssw0rd

# Create data directory
RUN mkdir -p /data/db

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017

# Start MongoDB with authentication enabled
CMD ["mongod"]
