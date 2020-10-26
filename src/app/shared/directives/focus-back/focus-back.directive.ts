import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({ selector: '[appFocusBack]' })
export class FocusBackDirective implements OnInit, OnDestroy {
    private _lastFocusedElement: Element;

    constructor() { }

    ngOnInit(): void {
        // Representa o elemento que está sendo focado na página naquele momento.
        this._lastFocusedElement = document.activeElement;
    }

    ngOnDestroy(): void {
        if (this._lastFocusedElement) {
            (this._lastFocusedElement as HTMLElement).focus();
        }
    }
}
