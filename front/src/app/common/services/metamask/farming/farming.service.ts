import { Injectable } from '@angular/core';
import { DataService } from '../../api/data.service';

declare let window: any;


@Injectable({
  providedIn: 'root'
})
export class FarmingService {

  constructor(private dataService: DataService) { 
    if (window.ethereum === undefined) {
      // this.toastr.errorToastr('Non-Ethereum browser detected. Install MetaMask', 'OOPS!');
    } else {
      window.web3 = window.web3.currentProvider;
      window.web3 = new window.Web3(window.ethereum);
    }
    }
}
