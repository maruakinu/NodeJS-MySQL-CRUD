const express = require('express');
const postsController = require('../controllers/post.controller');

const router =  express.Router();

router.post('/', postsController.save);

router.get('/:id', postsController.show);

router.get('/', postsController.viewall);

router.patch('/:id', postsController.update);

router.delete('/:id', postsController.destroy);

module.exports = router

