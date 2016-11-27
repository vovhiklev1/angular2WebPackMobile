import {SingletoneService} from './services/singletone-service'
import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'about',
    template: 'about<ng-content></ng-content>',
    inputs: ['inbox']
})
export class AboutComponent implements OnInit {

    constructor(private singletoneService:SingletoneService) {

    }

    ngOnInit() {
        let about = this.singletoneService;

    }
}