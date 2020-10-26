import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';

import { BodyInjectorService } from 'src/app/shared/services/body-injector.service';
import { IModalConfig } from '../interfaces/modal-config.interface';
import { ModalRef } from '../modal-ref';
import { ModalComponent } from '../modal.component';

@Injectable()
export class ModalService {
    private _componentFactory: ComponentFactory<ModalComponent>;

    constructor(
        componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector,
        private _bodyInjectorService: BodyInjectorService
    ) {
        // Construtor do componente do modal, isso é necessário para que o modal possa ser criado dinamicamente.
        this._componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
    }

    open(config: IModalConfig): ModalRef {
        const componentRef = this._createComponentRef();
        componentRef.instance.config = config;

        // Insere o componente do dialog na raiz do DOM, antes de qualquer outro elemento.
        this._bodyInjectorService.stackBeforeAppRoot(componentRef);

        const modalRef = new ModalRef(componentRef);
        componentRef.instance.modalRef = modalRef;

        return modalRef;
    }

    private _createComponentRef(): ComponentRef<ModalComponent> {
        return this._componentFactory.create(this._injector);
    }
}
