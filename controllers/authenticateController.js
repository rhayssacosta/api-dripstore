
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const users = require('../models');
require('dotenv').config();

function authenticateToken() {
    app.post('/register', async (request, response) => {
        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);
            const user = {
                username: request.body.username,
                cpf: request.body.cpf,
                email: request.body.email,
                phone: request.body.phone,
                password: hashedPassword,
                address: request.body.address,
                district: request.body.district,
                city: request.body.city,
                complemente: request.body.complemente
            };
            users.push(user);
            response.status(201).send('Usuário registrado com sucesso!');
        } catch {
            response.status(500).send('Erro ao registrar usuário.');
        }
    });

    app.post('/login', async (request, response) => {
        const user = users.find(user => user.email === request.body.email);
        if (user == null) {
            return response.status(400).send('Usuário não encontrado');
        }
        try {
            if (await bcrypt.compare(request.body.password, user.password)) {
                const accessToken = jwt.sign({ email: user.email }, process.env.KEY_SECRET, { expiresponseIn: '1h' });
                response.json({ accessToken });
            } else {
                response.send('Senha incorreta.');
            }
        } catch {
            response.status(500).send('Erro ao fazer login.');
        }
    });
};

module.exports = authenticateToken;
