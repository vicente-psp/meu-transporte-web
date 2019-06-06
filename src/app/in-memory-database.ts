import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from './pages/drivers/shared/driver.model';
import { Client } from './pages/clients/shared/client.model';
import { Product } from './pages/products/shared/product.model';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let drivers: Driver[] = [
      { id: 1, name: 'João Paulo', dateOfBirth: new Date(1992, 9, 24), cnh: '2353423', cpf: '12345632112', phone: '62984994081' },
    ];


    let clients: Client[] = [
      { id: 1, socialName: 'PANIFICADORA X LTDA', nameFantasy: 'PÃO X', cnpj: '12345632112', phone: '62984496473' },
    ];


    let products: Product[] = [
      { id: 1, description: 'Coca-cola', unitValue: 2.45 },
    ];

    return {drivers, clients, products};
  }
}