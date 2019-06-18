import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Driver extends BaseResourceModel {
    constructor(
        public idUser?: number,
        public dateOfBirth?: Date,
        public name?: string,
        public cnh?: string,
        public cnhCategory?: string,
        public cpf?: string,
        public phone?: string,
        public gender?: string,
        public firstDateCnh?: Date,
        public validityOfCnh?: Date,
        public userName?: string,
        public password?: string,
        public role?: string,
    ){
        super();
    }

    static fromJson(jsonData: any): Driver {
        return Object.assign(new Driver(), jsonData);
    }
}