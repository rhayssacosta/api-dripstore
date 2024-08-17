
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const imageController = require('../controllers/imageController');
const optionsProductController = require('../controllers/optionsProductController');
const productCategoryController = require('../controllers/productCategoryController');
const productController = require('../controllers/productController');

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

// Image routes
/**
 * @swagger
 * /images:
 *   get:
 *     summary: Recuperar uma lista de imagens
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Lista de imagens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 */
router.get('/images', imageController.getAllImages);
/**
 * @swagger
 * /images/{id}:
 *   get:
 *     summary: Recuperar uma única imagem
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da imagem
 *     responses:
 *       200:
 *         description: Uma única imagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Imagem não encontrada
 */
router.get('/images/:id', imageController.getImageById);
/**
 * @swagger
 * /images:
 *   post:
 *     summary: Criar uma nova imagem
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       201:
 *         description: Imagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/images', imageController.createImage);
/**
 * @swagger
 * /images/{id}:
 *   put:
 *     summary: Atualizar uma imagem
 *     tags: [Images]
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
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: Imagem atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Imagem não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/images/:id', imageController.updateImage);
/**
 * @swagger
 * /images/{id}:
 *   delete:
 *     summary: Deletar uma imagem
 *     tags: [Images]
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
router.delete('/images/:id', imageController.deleteImage);

// OptionsProduct routes
/**
 * @swagger
 * /options:
 *   get:
 *     summary: Recuperar uma lista de opções do produto
 *     tags: [OptionsProducts]
 *     responses:
 *       200:
 *         description: Lista de opções do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OptionsProduct'
 */
router.get('/options', optionsProductController.getAllOptionsProduct);
/**
 * @swagger
 * /options/{id}:
 *   get:
 *     summary: Recuperar uma única opção de produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de produto
 *     responses:
 *       200:
 *         description: Uma única opção
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       404:
 *         description: Opção não encontrada
 */
router.get('/options/:id', optionsProductController.getOptionById);
/**
 * @swagger
 * /options:
 *   post:
 *     summary: Criar uma nova opção
 *     tags: [OptionsProducts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsProduct'
 *     responses:
 *       201:
 *         description: Opção criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/options', optionsProductController.createOptionsProduct);
/**
 * @swagger
 * /options/{id}:
 *   put:
 *     summary: Atualizar uma opção do produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsProduct'
 *     responses:
 *       200:
 *         description: Opção atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsProduct'
 *       404:
 *         description: Opção não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/options/:id', optionsProductController.updateOption);
/**
 * @swagger
 * /options/{id}:
 *   delete:
 *     summary: Deletar uma opção do produto
 *     tags: [OptionsProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Opção não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/options/:id', optionsProductController.deleteOption);

// ProductCategory routes
/**
 * @swagger
 * /optionscategory:
 *   get:
 *     summary: Recuperar uma lista de opções de categoria do produtos
 *     tags: [OptionsCategory]
 *     responses:
 *       200:
 *         description: Lista de opções de categoria do produto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OptionsCategory'
 */
router.get('/optionscategory', productCategoryController.getAllProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   get:
 *     summary: Recuperar uma única opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria do produto
 *     responses:
 *       200:
 *         description: Uma única opção de categoria
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       404:
 *         description: Opção não encontrada
 */
router.get('/optionscategory/:id', productCategoryController.getProductCategoryById);
/**
 * @swagger
 * /optionsctegory:
 *   post:
 *     summary: Criar uma nova opção de categoria
 *     tags: [OptionsCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsCategory'
 *     responses:
 *       201:
 *         description: Opção de categoria criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/optionscategory', productCategoryController.createProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   put:
 *     summary: Atualizar uma opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OptionsCategory'
 *     responses:
 *       200:
 *         description: Opção de categoria atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OptionsCategory'
 *       404:
 *         description: Opção de categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.put('/optionscategory/:id', productCategoryController.updateProductCategory);
/**
 * @swagger
 * /optionscategory/{id}:
 *   delete:
 *     summary: Deletar uma opção de categoria do produto
 *     tags: [OptionsCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da opção de categoria
 *     responses:
 *       204:
 *         description: Sem corpo da resposta
 *       404:
 *         description: Opção de categoria não encontrada
 *       500:
 *         description: Erro no servidor
 */
router.delete('/optionscategory/:id', productCategoryController.deleteProductCategory);


module.exports = router;
