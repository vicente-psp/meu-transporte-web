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

  public phoneMask = {mask: '(00)00000-0000'};
  public cpfMask = {mask: '000.000.000-00'};
  public cnhMask = {mask: '00000000000'};
  public dateMask = {mask: '00/00/0000'};

  maxDate: Date = new Date();

  constructor(
    protected productService: ProductService,
    protected injector: Injector
  ) {
    super(injector, new Product(), productService, Product.fromJson);


    this.maxDate = new Date(new Date().getFullYear() - 18, new Date().getMonth() + 1, new Date().getDate());
  }

  protected isValidResource(): boolean {
    if (!this.isStringValid(this.resource.name)) {
      return false;
    }
    if (this.isDateValid(this.resource.dateOfBirth) && this.resource.dateOfBirth > this.maxDate) {
      return false;
    }
    if (!this.isStringValid(this.resource.cnh)) {
      return false;
    }
    if (!this.isStringValid(this.resource.cpf)) {
      return false;
    }
    if (!this.isStringValid(this.resource.phone)) {
      return false;
    }
    return true;
  }

  keyupClick(event): void {
    console.log(event.key);
  }
  
  convertToDate(event: any): void {
    if(!this.isNullOrUndefined(event.srcElement.value)) {
      const str = event.srcElement.value;
      this.resource.dateOfBirth = this.convertDateUSFromStringBr(str.split("/"));
    }
  }

}
