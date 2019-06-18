import { BaseResourceModel } from "../models/base-resource.model";
import { Injector } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export abstract class BaseResourceService<T extends BaseResourceModel> {

    protected httpClient: HttpClient;

    private API_ENDPOINT = 'http://localhost:8080/';

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResoursefn: (jsonData: any) => T,
        protected nameList: string
    ) {
        this.httpClient = injector.get(HttpClient);
    }

    get endPoint(): string {
        return this.API_ENDPOINT + this.apiPath;
    }


    // https://stackoverflow.com/questions/45210406/angular-4-3-httpclient-set-params
    getCountries(data: any) {
        // We don't need any more these lines
        // let httpParams = new HttpParams();
        // Object.keys(data).forEach(function (key) {
        //     httpParams = httpParams.append(key, data[key]);
        // });
    
        return this.httpClient.get("/api/countries", {params: data})
    }
    getPagedList(filtro: any): Observable<T[]> {
        let httpParams: HttpParams = new HttpParams();

        Object.keys(filtro).forEach(element => {
            httpParams = httpParams.append(element, filtro[element]);
        });

        console.log(httpParams);

        return this.httpClient.get(this.endPoint + '/paged-list', {params: httpParams}).pipe(
            map(this.jsonDataToResources.bind(this)),
            catchError(this.handleError)
        )
    }
    

    getAll(): Observable<T[]> {
        const headers = new HttpHeaders({
            'Content-Type' : 'application/json'
        });
        return this.httpClient.get(this.endPoint, {headers: headers}).pipe(
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


    protected jsonDataToResources(jsonData: any): T[] {
        const resources: T[] = [];
        jsonData._embedded[this.nameList].forEach(element => resources.push(this.jsonDataToResoursefn(element)));
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