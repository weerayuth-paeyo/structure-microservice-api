🚀 Quick Start

1. Prerequisites

Make sure you have the following installed:

Docker

Docker Compose

2. Clone the Repository

git clone https://github.com/your-repo/my-microservice-app.git
cd my-microservice-app

3. Run the Application

docker-compose up --build

Docker will build and start all three services.

🌐 API Endpoints (via API Gateway)

Endpoint

Method

Description

/users

GET

Get list of users

/orders

GET

Get list of orders

📁 Project Structure

my-microservice-app/
├── user-service/         # Handles user operations
├── order-service/        # Handles order operations
├── api-gateway/          # Central API gateway for routing
└── docker-compose.yml    # Docker Compose file

🛠️ Environment Variables

Each service can have its own .env file for configurations. Example for user-service:

# user-service/.env
PORT=3001
DB_HOST=host.docker.internal
DB_USER=root
DB_PASSWORD=pass
DB_NAME=mydb

✅ Docker Compose File Summary

services:
user-service:
build: ./user-service
ports:
- "3001:3001"
volumes:
- ./user-service:/app

order-service:
build: ./order-service
ports:
- "3002:3002"
volumes:
- ./order-service:/app

api-gateway:
build: ./api-gateway
ports:
- "8080:8080"
volumes:
- ./api-gateway:/app
depends_on:
- user-service
- order-service

💡 Notes

volumes: enables live code changes with hot-reloading.

depends_on: ensures the gateway waits for dependent services.

Feel free to contribute or customize based on your own microservices architecture!

