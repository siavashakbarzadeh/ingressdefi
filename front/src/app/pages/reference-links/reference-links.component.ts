import { Component, OnInit } from '@angular/core';
import { CommonContractService } from "src/app/common/services/metamask/common-contract/common-contract.service";
import { DataService } from "src/app/common/services/api/data.service";
import { MetamaskService } from "src/app/common/services/metamask/common/metamask.service";
import { ReferalService } from "src/app/common/services/metamask/referal/referal.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";

declare let window: any;

@Component({
  selector: 'app-reference-links',
  templateUrl: './reference-links.component.html',
  styleUrls: ['./reference-links.component.css']
})
export class ReferenceLinksComponent implements OnInit {

  referalAddress: any;

  isRefAddressValid = false;
  formSubmited = false;
  isShowReferalButton = false;

  amountDigits = "1.4-4";

  refLink: any;
  refHistory: any;
  refObj: any = {
    refCount: "",
    reward: "",
  };

  constructor(
    private commonContractService: CommonContractService,
    public dataService: DataService,
    private metamaskService: MetamaskService,
    private referalService: ReferalService,
    private toasterService: ToasterService
    ) { 
    this.metaCallCommonFunction();
  }

  ngOnInit() {
    this.setRefLink();
    this.getReferalInfo();
  }

  metaCallCommonFunction() {
    //  After Check

    this.dataService.isMetaReady.subscribe((suc) => {
      if (suc) {
        this.setRefLink();
        this.getReferalInfo();
      }
    });

    //  Before Check
    if (this.dataService.metaDeatails.isMetaLogin) {
      this.setRefLink();
      this.getReferalInfo();
    }
  }

  setRefLink() {
    this.refLink = `${window.location.origin}/refby/${this.dataService.metaDeatails.account}`;
  }

  async getReferalInfo() {
    this.referalService.GetReferalInfo().then(async (suc) => {
      console.log(suc, "suceees ");
      if (suc.status) {
        this.refObj.refCount = suc.info.refCount;
        this.refObj.reward = await window.web3.utils.fromWei(
          suc.info.reward.toString(),
          "ether"
          );
      } else {
        this.refObj.refCount = 0;
        this.refObj.reward = 0;
      }
    });
  }

  copyReferal() {
    if (this.dataService.metaDeatails.isMetaLogin) {
      let copyText: any = this.refLink;
      let selBox = document.createElement("textarea");
      selBox.style.position = "fixed";
      selBox.style.left = "0";
      selBox.style.top = "0";
      selBox.style.opacity = "0";
      selBox.value = copyText;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand("copy");
      document.body.removeChild(selBox);
      this.toasterService.show(true, "Referal Link Copied !");
    } else {
      this.dataService.showWalletList.emit(true);
      return;
    }
  }
}
