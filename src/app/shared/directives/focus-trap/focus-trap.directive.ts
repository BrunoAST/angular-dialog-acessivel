import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appFocusTrap]' })
export class FocusTrapDirective implements AfterViewInit {
    private _firstFocusableElement: HTMLElement = null;
    private _lastFocusableElement: HTMLElement = null;

    constructor(private _elementRef: ElementRef<any>) { }

    ngAfterViewInit(): void {
        // Receve a lista de todos os elementos que podem receber foco e que não estão desabilitados.
        const focusableElements: Array<HTMLElement> = this._elementRef.nativeElement.querySelectorAll(`
            [tabindex]:not([tabindex="-1"]),
            a[href]:not([disabled]),
            button:not([disabled]),
            textarea:not([disabled]),
            input:not([disabled]),
            select:not([disabled])
        `);

        this._firstFocusableElement = focusableElements[0];
        this._lastFocusableElement = focusableElements[focusableElements.length - 1];

        // O primeiro elemento começa com o foco.
        this._firstFocusableElement.focus();
    }

    @HostListener('keydown', ['$event'])
    manageTab(event: KeyboardEvent): void {
        if (event.key !== 'Tab') { return; }

        if (event.shiftKey && document.activeElement === this._firstFocusableElement) {
            this._lastFocusableElement.focus();
            event.preventDefault();
        } else if (document.activeElement === this._lastFocusableElement) {
            this._firstFocusableElement.focus();
            event.preventDefault();
        }
    }
}
