# FK_Assigment

# Build docker image

docker build -f Dockerfile -t username/node-web-app:1.0 .

## Notes

Connection string in .env file needs utf8 encoding use the following link for this purpose:
https://www.urlencoder.org/

# Run docker image

docker run -p 3000:8080 username/node-web-app:1.0

# Build docker-compose

Notes:
Docker Compose example: https://www.bogotobogo.com/DevOps/Docker/Docker-Compose-Node-MongoDB.php
