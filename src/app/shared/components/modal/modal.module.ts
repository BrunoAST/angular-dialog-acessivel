import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FocusBackModule } from '../../directives/focus-back/focus-back.module';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,

        FocusTrapModule,
        FocusBackModule
    ],
    providers: [ModalService],
    exports: [ModalComponent]
})
export class ModalModule { }
