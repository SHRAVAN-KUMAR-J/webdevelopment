# Authentication API

A JWT-based authentication API built with Node.js, Express, and MongoDB.

## Features

- User registration and login
- JWT token authentication
- Password hashing with bcrypt
- Role-based authorization
- Protected routes
- CORS support

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/authentication
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

4. Start MongoDB service

5. Run the server:
   ```bash
   npm start
   ```

   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Routes

- **POST /api/auth/register**
  - Register a new user
  - Body: `{ "username": "string", "email": "string", "password": "string" }`

- **POST /api/auth/login**
  - Login user
  - Body: `{ "username": "string", "password": "string" }`

- **GET /api/auth/profile**
  - Get user profile (requires authentication)
  - Headers: `{ "Authorization": "Bearer <token>" }`

- **GET /api/auth/protected**
  - Access protected route (requires authentication)
  - Headers: `{ "Authorization": "Bearer <token>" }`

- **POST /api/auth/logout**
  - Logout user (client-side token removal)

### Utility Routes

- **GET /api/health**
  - Health check endpoint

- **GET /**
  - API information and available endpoints

## Usage Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "password123"
  }'
```

### Access Protected Route
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Project Structure

```
authentication/
├── config/
│   └── db.js              # Database connection
├── middleware/
│   └── authMiddleware.js  # Authentication middleware
├── models/
│   └── User.js            # User model
├── routes/
│   └── authRoutes.js      # Authentication routes
├── server.js              # Main server file
├── package.json
└── README.md
```

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Input validation
- CORS protection
- Error handling middleware

## License

ISC