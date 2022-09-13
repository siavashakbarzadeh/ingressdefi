import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  OnDestroy,
} from "@angular/core";
import { timer } from "rxjs";

import { interval } from "rxjs";
import { map } from "rxjs/operators";

import * as moment from "moment";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() endDate;
  @Output() isTimeComplete = new EventEmitter();
  @Output() percentage = new EventEmitter();
  timeCount: any;
  subscribeCall: any;

  constructor() {}

  ngOnInit() {
    this.dateCheck();
  }

  ngOnDestroy() {
    if (this.subscribeCall) {
      this.subscribeCall.unsubscribe();
    }
  }

  dateCheck() {
    const source = timer(1000, 1000);
    this.subscribeCall = source.subscribe((val) => {
      this.timeCount = this.setInterval();
      this.perc();
    });
  }

  perc() {
    const startDate = new Date();
    const range = +this.endDate - +startDate;
    const diff = Math.max(0, +this.endDate - +new Date());

    // console.log(diff , "diff")
    // console.log(+new Date() , "diff")

    // let progressBarAscending = `${100 - (100 * diff) / range}`;

    let progressBarDescending = `${(100 * diff) / range}`;

    this.percentage.emit(progressBarDescending);


    // console.log(progressBarDescending, "progressBarDescending");
    // console.log(progressBarAscending, "progressBarAscending");
  }

  setInterval() {
    var toDate = new Date(+this.endDate);
    var fromDate = new Date();
    var difference = toDate.getTime() - fromDate.getTime();
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);


    console.log('seconds' , seconds , +seconds)
    console.log('minutes' , minutes , +minutes)
    console.log('hours' , hours, +hours)


    if (+seconds == 0 || +seconds < 0 && +minutes == 0 || +minutes < 0  && +hours == 0 || +seconds < 0 ) {
      console.log('yes hert')
      this.isTimeComplete.emit(true);
      this.subscribeCall.unsubscribe();
    }
    var result: any = `
      ${String(hours)}  Hour${hours > 1 ? "s" : ""}
      ${String(minutes)} Minute${minutes > 1 ? "s" : ""}  ${String(
      seconds
    )} Second${seconds > 1 ? "s" : ""}`;
    return result;
  }
}
