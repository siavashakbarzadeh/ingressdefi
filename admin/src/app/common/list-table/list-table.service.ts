import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListTableService {
  tableDatas = new EventEmitter();

  tableDataLoad = new EventEmitter();

  constructor() {}
}
