import { Component, HostBinding } from '@angular/core';

import { fade } from '../../animations/fade';
import { IModalConfig } from './interfaces/modal-config.interface';
import { ModalRef } from './modal-ref';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [fade]
})
export class ModalComponent {
    // Ativa a animação de fade quando o componente é iniciado.
    @HostBinding('@fade') fade = true;

    // Propriedades iniciadas pela instancia criada pelo componentFactory (servico do dialog)
    config: IModalConfig;
    modalRef: ModalRef;
}
