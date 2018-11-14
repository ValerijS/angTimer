import {
    Component,
    OnInit
} from '@angular/core';
import {
    ShowingTime
} from '../showing-time';
import {
    FormControl
} from '@angular/forms';

import {
    interval
} from 'rxjs';



function timeFormat(n: number): any {
    let m: number = 0,
        h: number = 0,
        //let arr = [];
        s: number = n % 60;
    if (s == 0 && n > 0) m++;
    if (m == 60) {
        m = 0;
        h = h + 1;
        h = h % 100;
    }
    return [s, m, h];
}
/* let m = ((n - s) / 60) % 60;
    let h = Math.floor(n / 3600) % 100;
    let sss = this.showingTime.SS;*
    //console.log(n,s,sss);
    if (s < 10) this.showingTime.SS = '0' + s;
    else this.showingTime.SS = '' + s;
    if (m < 10) this.showingTime.MM = '0' + m;
    else this.showingTime.MM = '' + m;
    if (h < 10) this.showingTime.HH = '0' + h;
    else this.showingTime.HH = '' + h;
    //console.log(`It's been ${n} seconds since subscribing!`,s);   
};*/

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values

let subscribe = secondsCounter.subscribe(n => {
    console.log(`It's been ${n} seconds since subscribing!`);
});
// setTimeout(()=> subscribe.unsubscribe(), 2000); 
@Component({
    selector: 'app-show-time',
    templateUrl: './show-time.component.html',
    styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit {
    timerDriver = new FormControl('');
    timerWaitC = new FormControl('');
    timerReset = new FormControl('');
    beginWait = 0;
    dblClickFlag = 0;
    dblClickEndWaitFlag = 0;
   // resetFlag = 0;
    counter = 0;
    showingTime: ShowingTime = {
        SS: '00',
        MM: '00',
        HH: '00'
    };

    start() {
        let n1 = this.beginWait;
        let s1 = n1 % 60;
        let m = ((n1 - s1) / 60) % 60;
        let h = Math.floor(n1 / 3600) % 100;
        if (this.dblClickFlag == 0) {

            subscribe = secondsCounter.subscribe(n => {
                var t3 = this.dblClickFlag,
                    t4 = this.dblClickEndWaitFlag,
                    t5 = this.resetFlag;
                console.log('_14_11_c_', t3, t4, t5);
                if (this.dblClickEndWaitFlag == 1) n = n + this.beginWait;
//                if (this.resetFlag == 1) {
//                    n = 0;
//                    this.resetFlag = 0;
//                }
                this.counter = n;
                let s: number = n % 60;
                if (s == 0 && n > 0) m++;
                if (m == 60) {
                    m = 0;
                    h = h + 1;
                    h = h % 100;
                }

                if (s < 10) this.showingTime.SS = '0' + s;
                else this.showingTime.SS = '' + s;
                if (m < 10) this.showingTime.MM = '0' + m;
                else this.showingTime.MM = '' + m;
                if (h < 10) this.showingTime.HH = '0' + h;
                else this.showingTime.HH = '' + h;
            });
        }
    }

    timerToggle(): void {        
        this.dblClickFlag = 0;        
        if (!subscribe.closed) {
            let t1 = this.beginWait;
            let t2 = this.counter;
            console.log('___13_11__', t1, t2);            
            subscribe.unsubscribe()
        } else {

            var t3 = this.dblClickFlag;
            var t4 = this.dblClickEndWaitFlag;
            console.log('_14_11_b_', t3, t4);

            setTimeout(() => this.start(), 300);
        }
    }

    timerWait(): void {
        this.dblClickFlag = 1;
        this.dblClickEndWaitFlag = 1;
        this.beginWait = this.counter;

        var t3 = this.dblClickFlag;
        var t4 = this.dblClickEndWaitFlag;
        console.log('_14_11_a_', t3, t4);
    }
    reset(): void {
        alert('wor');
        this.dblClickEndWaitFlag = 0;
        this.resetFlag = 1;
        if (!subscribe.closed) subscribe.unsubscribe();
        this.start()
    }
    constructor() {}
    ngOnInit() {}
}
