const express = require('express');

const routes = express.Router();

const PatrimonyController = require('./Controllers/PatrimonyController');

routes.get('/patrimony', PatrimonyController.getAll);
routes.get('/patrimony/:id', PatrimonyController.getOne);
routes.post('/patrimony/create', PatrimonyController.createPatrimony);
routes.put('/patrimony/:id', PatrimonyController.updatePatrimony);
routes.delete('/patrimony/:id', PatrimonyController.deletePatrimony);
routes.post('/patrimony/print', PatrimonyController.printPatrimony);


module.exports = routes;
