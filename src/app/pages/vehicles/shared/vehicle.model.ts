import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Vehicle extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string
    ){
        super();
    }

    static fromJson(jsonData: any): Vehicle {
        return Object.assign(new Vehicle(), jsonData);
    }
}