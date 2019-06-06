import { Component, Injector } from '@angular/core';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent extends BaseResourceFormComponent<Product> {


  constructor(
    protected productService: ProductService,
    protected injector: Injector
  ) {
    super(injector, new Product(), productService, Product.fromJson);
  }


  protected isValidResource(): boolean {
    if (!this.isStringValid(this.resource.description)) {
      return false;
    }
    if (!this.isNumberValid(this.resource.unitValue)) {
      return false;
    }
    return true;
  }

}
