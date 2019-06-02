import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';
import { isNullOrUndefined, isDate } from 'util';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

    currentAction: string;
    pageTitle: string;
    serverErrorMessages: string[] = null;
    submittingForm: boolean = false;
    
    protected route: ActivatedRoute;
    protected router: Router;
    protected formBuilder: FormBuilder;

    constructor(
        protected injector: Injector,
        public resource: T,
        protected resourceService: BaseResourceService<T>,
        protected jsonDataToResourcefn: (jsonData) => T
    ) {
       this.route = this.injector.get(ActivatedRoute);
       this.router = this.injector.get(Router);
       this.formBuilder = this.injector.get(FormBuilder);
    }

    ngOnInit() {
        this.setCurrentAction();
        this.loadResource();
    }

    ngAfterContentChecked() {
        this.setPageTitle();
    }

    submitForm() {
        if (this.isValidResource()) {
            if (this.currentAction === 'cadastrar') {
                this.createResource();
            } else {
                this.updateResource();
            }
        }
    }

    protected abstract isValidResource(): boolean;


    protected setCurrentAction() {
        if (this.route.snapshot.url[0].path === 'cadastrar') {
            this.currentAction = 'cadastrar';
        } else {
            this.currentAction = 'editar';
        }
    }

    protected loadResource() {
        if (this.currentAction === 'editar') {
            this.route.paramMap.pipe(
                switchMap(params => this.resourceService.getById(+params.get('id')))
            )
                .subscribe(
                    (resource) => {
                        this.resource = resource;
                    },
                    (error) => alert('Ocorreu um erro no servidor')
                )
        }
    }

    protected setPageTitle() {
        if (this.currentAction === 'cadastrar') {
            this.pageTitle = this.createPageTitle();
        } else {
            this.pageTitle = this.editionPageTitle();
        }
    }

    protected createResource() {      
        this.resourceService.create(this.resource).subscribe(
            resource => this.actionsForSuccess(resource),
            error => this.actionsForError(error)
        )
    }

    protected updateResource() {
        const resource: T = this.jsonDataToResourcefn(this.resource);
        this.resourceService.update(resource).subscribe(
            resource => this.actionsForSuccess(resource),
            error => this.actionsForError(error)
        )
    }

    protected actionsForSuccess(resource: T) {
        toastr.success('Solicitação processada com sucesso');

        const baseComponentPath: string = this.route.snapshot.parent.url[0].path;
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(
            () => this.router.navigate([baseComponentPath, 'editar', resource.id])
        )
    }

    protected actionsForError(error) {
        toastr.error('Ocorreu um erro ao processar solicitação');

        this.submittingForm = false;

        if (error.status = 422) {
            this.serverErrorMessages = [error.body.error];
        } else {
            this.serverErrorMessages = ['Falha na comunicação com o servidor, tente mais tarde'];
        }
    }

    protected createPageTitle(): string {
        return 'Cadastrar';
    }

    protected editionPageTitle(): string {
        return 'Editar';
    }

    protected isNullOrUndefined(obj: any): boolean {
        return isNullOrUndefined(obj);
    }

    protected isDateValid(obj: Date): boolean {
        if (!this.isNullOrUndefined(obj) && isDate(obj)) {
            return true;
        }
        return false;
    }

    protected convertDateUSFromStringBr(obj: number[]): Date | null {
      if (obj.length === 3) {
        return new Date(obj[2], obj[1] - 1, obj[0]);
      }
      return null;
    }

    protected clearInput(input: string): void {
      if (this.isStringValid(input)) {
        this.resource[input] = '';
      }
    }
  
    protected isTextInputValid(text: string): boolean {
      if (this.isStringValid(text)) {
        return true;
      }
      return false;
    }
    
    /**
     * Verifica se existe texto válido na string
     * @param value 
     */
    protected isStringValid(value: string): boolean {
      if (!this.isNullOrUndefined(value) && value.length > 0) {
        return true;
      }
      return false;
    }

}