import { Injectable } from "@angular/core";
import { Toast } from "./toast.interface";
import { ToastType } from "./toast.type";
import { Observable, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { DataService } from '../services/api/data.service';

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  subject: BehaviorSubject<Toast>;
  toast$: Observable<Toast>;

  constructor(private dataService : DataService) {
    console.log('Toaster service called')
    this.subject = new BehaviorSubject<Toast>(null);
    this.toast$ = this.subject
      .asObservable()
      .pipe(filter((toast) => toast !== null));
  }

  show(type: ToastType, title?: string, delay?: number, body?: string, kill?:boolean) {
    if (type) {
      type = "success";
    }

    if (type == false) {
      type = "error";
    }

    // console.log(delay, "delay");

    if (delay == undefined) {
      delay = 3000;
    }
    this.dataService.changeDetector.emit(true);
    this.subject.next({ type, title, body, delay });
  }
}
