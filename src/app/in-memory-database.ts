import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let vehicles = [
      { id: 1, description: 'Gol', plate: 'NMZ-7776' },
    ];
    return {vehicles};
  }
}