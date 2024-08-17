
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation for My API',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        cpf: {
                            type: 'string',
                            description: 'CPF usuário'
                        },
                        email: {
                            type: 'string',
                            description: 'Email do usuário',
                        },
                        phone: {
                            type: 'string',
                            description: 'Telefone do usuário',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                        },
                        address: {
                            type: 'string',
                            description: 'Endereço do usuário',
                        },
                        district: {
                            type: 'string',
                            description: 'Bairro do usuário',
                        },
                        city: {
                            type: 'string',
                            description: 'Cidade do usuário',
                        },
                        complement: {
                            type: 'string',
                            description: 'Complemento do usuário',
                        },
                    },
                    required: ['username', 'cpf', 'email', 'phone', 'password', 'address', 'district', 'city', 'complement'],
                },
            },
        },
  },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas onde você vai documentar as rotas
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
