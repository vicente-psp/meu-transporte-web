import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseResourceService<Product> {

  constructor(protected injector: Injector) {
    super('products', injector, Product.fromJson);
  }
}
