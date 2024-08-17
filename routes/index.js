
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const orderController = require('../controllers/orderController');
const productController = require('../controllers/productController');
const imagesProductController = require('../controllers/imageProductController')
const saleController = require('../controllers/saleController');
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
/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Recuperar uma lista de categoria
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categoria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 */
router.get('/categories', categoryController.getAllCategories);
/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Recuperar uma única categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       200:
 *         description: Uma única categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categoria não encontrada
 */
router.get('/categories/:id', categoryController.getCategoryById);
/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Criar uma nova categoria
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/categories', categoryController.createCategory);
/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Atualizar uma categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Categoria atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erro no servidor
 */
router.put('/categories/:id', categoryController.updateCategory);
/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Deletar uma categoria
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da categoria
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/categories/:id', categoryController.deleteCategory);

// Order routes
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Recuperar uma lista de pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get('/orders', orderController.getAllOrders);
/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Recuperar um único pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       200:
 *         description: Um único pedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido não encontrado
 */
router.get('/orders/:id', orderController.getOrderById);
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Orders'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/orders', orderController.createOrder);
/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orders'
 *       500:
 *         description: Erro no servidor
 */
router.put('/orders/:id', orderController.updateOrder);
/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Deletar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/orders/:id', orderController.deleteOrder);

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
 *     summary: Deletar um produto
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

// ProductImages routes
/**
 * @swagger
 * /imagesProduct:
 *   get:
 *     summary: Recuperar uma lista de imagens
 *     tags: [ImageProduct]
 *     responses:
 *       200:
 *         description: Lista de imagens de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ImageProduct'
 */
router.get('/imagesProduct', imagesProductController.getAllImageProducts);
/**
 * @swagger
 * /imagesProduct/{id}:
 *   get:
 *     summary: Recuperar uma única imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem do produto
 *     responses:
 *       200:
 *         description: Uma única imagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       404:
 *         description: Imagem não encontrada
 */
router.get('/imagesProduct/:id', imagesProductController.getImageProductById);
/**
 * @swagger
 * /imagesProduct:
 *   post:
 *     summary: Criar uma nova imagem de um produto
 *     tags: [ImageProduct]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageProduct'
 *     responses:
 *       201:
 *         description: Imagem inserida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/imagesProduct', imagesProductController.createImageProduct);
/**
 * @swagger
 * /imagesProduct/{id}:
 *   put:
 *     summary: Atualizar uma imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImageProduct'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageProduct'
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/imagesProduct/:id', imagesProductController.updateImageProduct);
/**
 * @swagger
 * /imagesProduct/{id}:
 *   delete:
 *     summary: Deletar uma imagem
 *     tags: [ImageProduct]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/imagesProduct/:id', imagesProductController.deleteImageProduct);

// // Sale routes
/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Recuperar uma lista de vendas
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Lista de vendas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sale'
 */
router.get('/sales', saleController.getAllSales);
/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     summary: Recuperar uma compra
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     responses:
 *       200:
 *         description: Uma única venda
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venda não encontrada
 */
router.get('/sales/:id', saleController.getSaleById);
/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Criar uma nova venda
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       201:
 *         description: Venda criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/sales', saleController.createSale);
/**
 * @swagger
 * /sales/{id}:
 *   put:
 *     summary: Atualizar uma venda
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venda não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/sales/:id', saleController.updateSale);
/**
 * @swagger
 * /sales/{id}:
 *   delete:
 *     summary: Deletar uma venda
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da venda
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Venda não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/sales/:id', saleController.deleteSale);

module.exports = router;
