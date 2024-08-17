
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// const categoryController = require('../controllers/categoryController');
// const orderController = require('../controllers/orderController');
// const orderItemController = require('../controllers/orderItemController');
const productController = require('../controllers/productController');
// const authController = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: e-commerce API
 *   description: Documentação de referência da API de demonstração para o trabalho final da geração Tech
 */

// // Auth routes
// /**
//  * @swagger
//  * /register:
//  *   post:
//  *     summary: Criar um novo usuário
//  *     tags: [Autenticação]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       201:
//  *         description: Usuário criado
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/User'
//  *       500:
//  *         description: Erro no servidor
//  */
// router.post('/register', authController.register);
// /**
//  * @swagger
//  * /login:
//  *   post:
//  *     summary: Realiza o login do usuário
//  *     tags: [Autenticação]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 description: Email do usuário
//  *                 example: "usuario@example.com"
//  *               password:
//  *                 type: string
//  *                 description: Senha do usuário
//  *                 example: "senha123"
//  *     responses:
//  *       200:
//  *         description: Login bem-sucedido
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 token:
//  *                   type: string
//  *                   description: Token JWT para autenticação
//  *       401:
//  *         description: Credenciais inválidas
//  */
// router.post('/login', authController.login);

// User routes
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Recuperar uma lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', userController.getAllUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Recuperar um único usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Um único usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/users/:id', userController.getUserById);
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/users', userController.createUser);
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro no servidor
 */
router.put('/users/:id', userController.updateUser);
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletar um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/users/:id', userController.deleteUser);

// // Category routes
// router.get('/categories', categoryController.getAllCategories);
// router.get('/categories/:id', categoryController.getCategoryById);
// router.post('/categories', categoryController.createCategory);
// router.put('/categories/:id', categoryController.updateCategory);
// router.delete('/categories/:id', categoryController.deleteCategory);

// // Order routes
// router.get('/orders', orderController.getAllOrders);
// router.get('/orders/:id', orderController.getOrderById);
// router.post('/orders', orderController.createOrder);
// router.put('/orders/:id', orderController.updateOrder);
// router.delete('/orders/:id', orderController.deleteOrder);

// // OrderItem routes
// router.get('/orderItems', orderItemController.getAllOrderItems);
// router.get('/orderItems/:id', orderItemController.getOrderItemById);
// router.post('/orderItems', orderItemController.createOrderItem);
// router.put('/orderItems/:id', orderItemController.updateOrderItem);
// router.delete('/orderItems/:id', orderItemController.deleteOrderItem);

// Product routes
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Recuperar uma lista de produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Recuperar um único produto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Um único produto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/products/:id', productController.getProductById);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Criar um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/products', productController.createProduct);
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualizar um produto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Produto atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/products/:id', productController.updateProduct);
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Deletar um usuário
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do produto
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Produto não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
