import { BaseResourceModel } from "../models/base-resource.model";
import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class BaseResourceService<T extends BaseResourceModel> {

    protected httpClient: HttpClient;

    private API_ENDPOINT = 'api/';

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResoursefn: (jsonData: any) => T
    ) {
        this.httpClient = injector.get(HttpClient);
    }

    get endPoint(): string {
        return this.API_ENDPOINT + this.apiPath;
    }

    getAll(): Observable<T[]> {
        return this.httpClient.get(this.endPoint).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        )
    }
    
    getById(id: number): Observable<T> {
        const url = `${this.endPoint}/${id}`;

        return this.httpClient.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }
    
    create(resource: T): Observable<T> {
        return this.httpClient.post(this.endPoint, resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        )
    }

    update(resource: T): Observable<T> {
        const url = `${this.endPoint}/${resource.id}`;
        return this.httpClient.put(url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        )
    }

    delete(id: number): Observable<any> {
        const url = `${this.endPoint}/${id}`;
        return this.httpClient.delete(url).pipe(
            map(() => null),
            catchError(this.handleError)
        )
    }


    protected jsonDataToResources(jsonData: any[]): T[] {
        const resources: T[] = [];
        jsonData.forEach(element => resources.push(this.jsonDataToResoursefn(element)));
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResoursefn(jsonData);
    }

    protected handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }

}