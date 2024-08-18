
require('dotenv').config();
const jwt = require('jsonwebtoken');


function authenticateToken(request, response, next) {
    const authenticHeader = request.headers['authorization'];
    const token = authenticHeader && authenticHeader.split(' ')[1];
    if (token == null) return response.sendStatus(401);

    jwt.verify(token, process.env.KEY_SECRET, (erro, user) => {
        if (erro) return response.sendStatus(403);
        request.user = user;
        next();
    });
}

module.exports = authenticateToken;