const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Check if token starts with 'Bearer '
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

// Role-based authorization middleware
const roleAuthorization = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied: insufficient permissions' });
        }
        next();
    };
};

// Admin only middleware
const adminOnly = roleAuthorization('admin');

// User or admin middleware
const userOrAdmin = roleAuthorization('user', 'admin');

module.exports = {
    authMiddleware,
    roleAuthorization,
    adminOnly,
    userOrAdmin
};