import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IModalConfig } from './shared/components/modal/interfaces/modal-config.interface';
import { ModalRef } from './shared/components/modal/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('modal') modalTemplateRef: TemplateRef<unknown>;

    modalRef: ModalRef;
    form: FormGroup;

    constructor(
        private _modalService: ModalService,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this._formBuilder.group({
            firstName: ['Bruno', [Validators.required]],
            surName: ['', [Validators.required]],
            age: ['', [Validators.required]],
            info: [false]
        });
    }

    show(): void {
        const config: IModalConfig = {
            templateRef: this.modalTemplateRef,
            title: 'User details'
        };

        this.modalRef = this._modalService.open(config);
    }

    submit(): void {
        if (this.form.invalid) { return; }

        console.log(this.form.value);
        this.modalRef.close();
    }
}
