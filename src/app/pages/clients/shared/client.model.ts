import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Client extends BaseResourceModel {
    constructor(
        public id?: number,
        public socialName?: string,
        public fantasy?: string,
        public cnpj?: string,
        public phone?: string
    ){
        super();
    }

    static fromJson(jsonData: any): Client {
        return Object.assign(new Client(), jsonData);
    }
}