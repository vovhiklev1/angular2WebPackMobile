import {Directive, ElementRef} from "@angular/core";
@Directive({
    selector: '[popup]',
    inputs: ['message'],
    exportAs: 'popup',
    host: {
        '(click)': 'showMessage()'
    }

})

export class PopupDirective {
    constructor(private elem:ElementRef) {

    }

    showMessage() {
        let el = this.elem;
        let self = this;
        debugger
    }
}