# Application Test for Job Interview

This application was developed as a test for a job interview using the NestJS framework.

## Overview

The application is a simple RESTful API for managing users. It provides endpoints for creating, updating, and deleting users. It also has a RabbitMQ queue that sends a message every time a new user is created.

### Technical Details
#### Architecture

The application was developed following the principles of clean architecture, separating the code into layers: infrastructure, domain, and use cases. The infrastructure layer is responsible for managing external tools such as RabbitMQ, and the database connection. The domain layer is where the business logic is implemented. The use case layer is the layer that orchestrates the application flow.

### Design Patterns

The application makes use of various design patterns such as Factory Method, Observer Pattern, and Dependency Injection.

### Infrastructure

The application was built using the NestJS framework, which is based on Node.js. The database used was MongoDB, and the connection was managed using the mongoose library. For messaging, RabbitMQ was used, and the connection was managed using the amqplib library.

### Testing

The application has unit tests for the use case layer using Jest. It also has integration tests for the API endpoints using Supertest.

### API Documentation

The application uses the @nestjs/swagger package to generate API documentation using the OpenAPI specification. The documentation is available at /api-docs.

## Getting Started
### Prerequisites
Docker 

### Installation
1. Clone the repository:

```
git clone https://github.com/your-username/your-repo.git

```

2. Run Docker:

```
docker-compose up -d

```

### Usage

3. The API is now available at http://localhost:3000.

4. To view the API documentation, go to http://localhost:3000/api-docs.

### Testing

Run the integration tests:
```
npm run test:e2e

```

## Conclusion
This application is a simple example of how to build a RESTful API using the principles of clean architecture, design patterns, and modern web technologies. It demonstrates the use of various tools and libraries that are commonly used in Node.js development.