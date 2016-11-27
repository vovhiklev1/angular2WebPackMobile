import {Component, OnInit, Inject, ContentChildren, QueryList, AfterContentInit, forwardRef} from '@angular/core';
/*declare var hummerjs: any;*/
import {SingletoneService} from './services/singletone-service'
import {AboutComponent} from "./about.component";

@Component({
    selector: 'my-app',
    template: `app comp
    <about [inbox]="a1">lorem ipsum1 ...</about>   
    <about [inbox]="a2">lorem ipsum2 ...</about>`
    /* <h1 popup message="1" #p1="popup">about</h1>
     <h1 popup message="2" #p2="popup">about</h1>
     <p #p2.showMessage()></p>
     <p #p1.showMessage()></p>*/

})
export class AppComponent implements OnInit, AfterContentInit {
    @ContentChildren(forwardRef(()=> AboutComponent)) abouts;

    constructor(@Inject(SingletoneService) private singletoneService) {
//test on server
    }

    ngOnInit() {
        let a = this.singletoneService.port = 0;

    }

    ngAfterContentInit() {
        let ab = this.abouts;
        debugger
    }


}
