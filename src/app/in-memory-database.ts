import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from './pages/drivers/shared/driver.model';
import { Client } from './pages/clients/shared/client.model';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let drivers: Driver[] = [
      { id: 1, name: 'João Paulo', dateOfBirth: new Date(1992, 9, 24), cnh: '2353423', cpf: '12345632112', phone: '62984994081' },
    ];


    let clients: Client[] = [
      { id: 1, name: 'Pedro', dateOfBirth: new Date(1990, 5, 4), cnh: '98782353423', cpf: '12345632112', phone: '62984496473' },
    ];

    return {drivers, clients};
  }
}