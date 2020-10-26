import { ComponentRef } from '@angular/core';

import { ModalComponent } from './modal.component';

export class ModalRef {
    constructor(private _componentRef: ComponentRef<ModalComponent>) { }

    close(): void {
        this._componentRef.destroy();
    }
}
