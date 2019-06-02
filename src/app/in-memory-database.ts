import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Driver } from './pages/drivers/shared/driver.model';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let drivers: Driver[] = [
      { id: 1, name: 'João Paulo', dateOfBirth: new Date(1992, 9, 24), cnh: '2353423', cpf: '12345632112', phone: '62984994081' },
    ];
    return {drivers};
  }
}