import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from './pages/drivers/shared/driver.model';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let drivers: Driver[] = [
      { id: 1, name: 'João Paulo', cnh: '2353423', cpf: '1234563211' },
    ];
    return {drivers};
  }
}