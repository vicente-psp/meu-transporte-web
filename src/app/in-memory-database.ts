import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from './pages/vehicles/shared/vehicle';
 
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    let vehicles: Vehicle[] = [
      { id: 1, description: 'Gol', plate: 'NMZ-7776' },
    ];
    return {vehicles};
  }
}