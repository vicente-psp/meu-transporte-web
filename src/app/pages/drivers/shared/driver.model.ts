import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Driver extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public cnh?: string,
        public cpf?: string,
        public phone?: string
    ){
        super();
    }

    static fromJson(jsonData: any): Driver {
        return Object.assign(new Driver(), jsonData);
    }
}