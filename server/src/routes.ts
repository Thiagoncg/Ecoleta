import express, { response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController;
const itemsController = new ItemsController;


routes.get('/items', itemsController.index );//list Total Items

routes.post('/points',pointsController.create);//insert collect points
routes.get('/points',pointsController.index);//listar ponto especifico por região
routes.get('/points/:id',pointsController.show);//listar ponto especifico



//index = Listagem
//show = um unico registro

//create = adicionar registro,
//update = atualizar
//delete = deletar

export default routes;