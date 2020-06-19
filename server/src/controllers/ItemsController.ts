import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select("*");//retorna todos os dados da tabela items
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.105:3333/uploads/${item.image}`,
        // Para funcionar no meu pc 192.168.0.105:19000
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;