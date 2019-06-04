import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Client extends BaseResourceModel {
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

    static fromJson(jsonData: any): Client {
        return Object.assign(new Client(), jsonData);
    }
}