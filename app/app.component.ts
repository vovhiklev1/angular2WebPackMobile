import {Component, OnInit} from '@angular/core';
/*declare var hummerjs: any;*/

@Component({
    selector: 'my-app',
    template: 'q1 <h1 (swipeleft)="swipe(idx, $event)" (swiperight)="swipe(idx, $event)" >Hello Angular! 111 </h1>'
})
export class AppComponent  {

      /*  function log(ev: any) {
            console.log(ev);
        }
*/
       /* document.body.addEventListener('touchstart', log, false);
        document.body.addEventListener('touchmove', log, false);
        document.body.addEventListener('touchend', log, false);*/

        SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

        // our list of avatars
        avatars = [
            {
                name: 'kristy',
                image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
                visible: true
            },
            {
                name: 'matthew',
                image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
                visible: false
            },
            {
                name: 'chris',
                image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
                visible: false
            },
            {
                name: 'jenny',
                image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
                visible: false
            }
        ];

        // action triggered when user swipes
        swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
            // out of range
            if (currentIndex > this.avatars.length || currentIndex < 0) return;

            let nextIndex = 0;

            // swipe right, next avatar
            if (action === this.SWIPE_ACTION.RIGHT) {
                const isLast = currentIndex === this.avatars.length - 1;
                nextIndex = isLast ? 0 : currentIndex + 1;
            }

            // swipe left, previous avatar
            if (action === this.SWIPE_ACTION.LEFT) {
                const isFirst = currentIndex === 0;
                nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
            }

            // toggle avatar visibility
            this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
        }


}
