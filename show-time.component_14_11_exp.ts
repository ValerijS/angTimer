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
    counter = 0;
    showingTime: ShowingTime = {
        SS: '00',
        MM: '00',
        HH: '00'
    };
    updateName() {
        this.timerDriver.setValue('Nancy');
    }

    timerToggle(): void {
        var m: number = 0,
            h: number = 0,
            //alert('work');
            //console.log(subscribe);
            //let subscribe;
            if (!subscribe.closed) {
                let t1 = this.beginWait;
                let t2 = this.counter;
                console.log('___13_11__',t1,t2);
                this.beginWait = 0;
                this.counter= 0;
                subscribe.unsubscribe()
            } else {
                subscribe = secondsCounter.subscribe(n => {
                    /*            let s = n % 60;
                    let m = ((n - s) / 60) % 60;
                    let h = Math.floor(n / 3600) % 100;
                    let sss = this.showingTime.SS;
                    //console.log(n,s,sss);*/

                    //let arr = [];
                    this.counter= n;
                    let s: number = n % 60;
                    if (s == 0 && n > 0) m++;
                    if (m == 60) {
                        m = 0;
                        h = h + 1;
                        h = h % 100;
                    }
                    /*let arr = timeFormat(n);
                    let s: number = arr[0];
                    let m: number = arr[1];
                    let h: number = arr[2];*/
                    if (s < 10) this.showingTime.SS = '0' + s;
                    else this.showingTime.SS = '' + s;
                    if (m < 10) this.showingTime.MM = '0' + m;
                    else this.showingTime.MM = '' + m;
                    if (h < 10) this.showingTime.HH = '0' + h;
                    else this.showingTime.HH = '' + h;
                    //console.log(`It's been ${n} seconds since subscribing!`,s); 
                });
            }
    }
     
    timerWait(): void {
        let n1 = this.beginWait;
        let s1 = n1 % 60;
                    let m = ((n1 - s1) / 60) % 60;
                    let h = Math.floor(n1 / 3600) % 100;
        
            if (!subscribe.closed) {
                this.beginWait =  this.counter;
                let t1 = this.beginWait;
                let t2 = this.counter;
                console.log('___13_11_a_',t1,t2);
                this.counter = 0;
                subscribe.unsubscribe()
            } else {
                subscribe = secondsCounter.subscribe(n => {
                    n = n + this.beginWait;
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
    constructor() {}
    ngOnInit() {}
}
