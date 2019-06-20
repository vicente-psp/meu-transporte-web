import { BaseResourceModel } from "../models/base-resource.model";
import { Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { isNullOrUndefined } from "util";

export abstract class BaseResourceService<T extends BaseResourceModel> {

    protected httpClient: HttpClient;

    private API_ENDPOINT = 'http://meu-transporte.us-east-2.elasticbeanstalk.com/';

    constructor(
        protected resourcePath: string,
        protected injector: Injector,
        protected jsonDataToResoursefn: (jsonData: any) => T,
        protected nameList: string
    ) {
        this.httpClient = injector.get(HttpClient);
    }

    get endPoint(): string {
        return this.API_ENDPOINT + this.resourcePath;
    }

    get headers(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type' : 'application/json'
        });
    }


    getPagedList(filtro: any): Observable<T[]> {
        let httpParams: HttpParams = new HttpParams();

        Object.keys(filtro).forEach(element => {
            httpParams = httpParams.append(element, filtro[element]);
        });

        return this.httpClient.get(this.endPoint + '/paged-list', {params: httpParams}).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        )
    }
    

    getAll(): Observable<T[]> {
        return this.httpClient.get(this.endPoint, {headers: this.headers}).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        )
    }
    
    getById(id: number): Observable<T> {
        const url = `${this.endPoint}/${id}`;

        return this.httpClient.get(url, {headers: this.headers}).pipe(
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
        return this.httpClient.put(this.endPoint, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        )
    }

    delete(id: number): Observable<any> {
        const url = `${this.endPoint}/${id}`;
        return this.httpClient.delete(url, {headers: this.headers}).pipe(
            map(() => null),
            catchError(this.handleError)
        )
    }


    protected jsonDataToResources(jsonData: any): T[] {
        const resources: T[] = [];
        if (!isNullOrUndefined(jsonData._embedded) && !isNullOrUndefined(jsonData._embedded[this.nameList])) {
            jsonData._embedded[this.nameList].forEach(element => {
                resources.push(this.jsonDataToResoursefn(element));
            });
        }
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