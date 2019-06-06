import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Product extends BaseResourceModel {
    constructor(
        public id?: number,
        public description?: string,
        public unitValue?: number,
    ){
        super();
    }

    static fromJson(jsonData: any): Product {
        return Object.assign(new Product(), jsonData);
    }
}