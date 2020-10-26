import { ApplicationRef, ComponentRef, EmbeddedViewRef, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
    constructor(private _appRef: ApplicationRef) { }

    stackBeforeAppRoot(componentRef: ComponentRef<unknown>): void {
        const domElement = this._createDomElement(componentRef);
        const appRoot = document.body.querySelector('app-root');

        document.body.insertBefore(domElement, appRoot);
    }

    private _createDomElement(componentRef: ComponentRef<unknown>): HTMLElement {
        // Insere a view no contexto da aplicação.
        // * Host view representa o template da instancia do componente gerado dinamicamente.
        this._appRef.attachView(componentRef.hostView);

        // Recebe o elemento HTML que representa o componentRef que está inserido no primeiro nivel do DOM.
        const domElement = (componentRef.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement;

        return domElement;
    }
}
