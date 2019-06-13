import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from './pages/drivers/shared/driver.model';
import { Client } from './pages/clients/shared/client.model';
import { Product } from './pages/products/shared/product.model';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let drivers: Driver[] = [
      { id: 1, name: 'João Paulo', dateOfBirth: new Date(1992, 9, 24), cnh: '12345632112', cpf: '12345632112', phone: '62984994081' },
      { id: 2, name: 'João Pedro', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632112', cpf: '12345632112', phone: '62984994081' },
      { id: 3, name: 'Raimundo Pereira', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632112', cpf: '12345632112', phone: '62984994081' },
      { id: 4, name: 'José das Couves', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632112', cpf: '12345632112', phone: '62984994081' },
      { id: 5, name: 'Eduardo', dateOfBirth: new Date(1990, 3, 9), cnh: '54345632112', cpf: '12345632112', phone: '62984994081' },
      { id: 6, name: 'Mônica', dateOfBirth: new Date(1970, 7, 9), cnh: '12349082112', cpf: '12345632112', phone: '62984994081' },
      { id: 7, name: 'Maria', dateOfBirth: new Date(1980, 5, 9), cnh: '12345765112', cpf: '12345632112', phone: '62984994081' },
      { id: 8, name: 'Paula', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632908', cpf: '12345632112', phone: '62984994081' },
      { id: 9, name: 'Vanessa', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632908', cpf: '12345632112', phone: '62984994081' },
      { id: 10, name: 'Daniel', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632908', cpf: '12345632112', phone: '62984994081' },
      { id: 11, name: 'Moreira Ferreira', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632908', cpf: '12345632112', phone: '62984994081' },
      { id: 12, name: 'Joana M', dateOfBirth: new Date(1990, 3, 9), cnh: '12345632908', cpf: '12345632112', phone: '62984994081' },
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