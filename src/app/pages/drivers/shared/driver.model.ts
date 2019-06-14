import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Driver extends BaseResourceModel {
    constructor(
        public id?: number,
        public dateOfBirth?: Date,
        public name?: string,
        public cnh?: string,
        public cpf?: string,
        public phone?: string,
        public gender?: string,
    ){
        super();
    }

    static fromJson(jsonData: any): Driver {
        return Object.assign(new Driver(), jsonData);
    }
}