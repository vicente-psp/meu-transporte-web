import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Product extends BaseResourceModel {
    constructor(
        public id?: number,
        public dateOfBirth?: Date,
        public name?: string,
        public cnh?: string,
        public cpf?: string,
        public phone?: string
    ){
        super();
    }

    static fromJson(jsonData: any): Product {
        return Object.assign(new Product(), jsonData);
    }
}