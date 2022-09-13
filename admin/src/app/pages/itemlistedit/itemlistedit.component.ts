import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { DataService } from 'src/app/common/api/data.service';
import { AdminMintService } from 'src/app/common/services/metamask/adminminting/admin-mint.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itemlistedit',
  templateUrl: './itemlistedit.component.html',
  styleUrls: ['./itemlistedit.component.scss']
})
export class ItemlisteditComponent implements OnInit {


    loading = true; postRequest = ''; disable:Boolean=false; pageType = "";
  actionType = ''; newsUrl = ""; editFeature = true; displayNoRecords:any;
  chngmode:boolean = true; changeUploadTriggered:boolean = true;
  token = localStorage.getItem('Key'); per = false; access:any;
  config:any; editObj: any = {};
  isFormSubmitted: boolean = false;
  isGetBlogLoading = true;
  isDataPassing = false;

  model = {"_id":"","title":"","description":"","content":"","blog_image":"","status":1};


  constructor(private dataService: DataService,
    public general: GeneralService,
    private activatedRoute: ActivatedRoute,
    private route: Router,private mintservice:AdminMintService) { 

    this.config=this.dataService.geteditorconfig() 

  }

  ngOnInit() {

     this.editObj = {
      name: '',
      external_link: '',
      description: '',
      _id:'',
      image:'',
    };
    this.editObj._id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSingleData();
  }


  getSingleData() {
  this.isGetBlogLoading = true;
  this.dataService.postRequest('admin/getitems', { id: this.editObj._id }).subscribe((success) => {
    let reponseData: any = success;
    this.isGetBlogLoading = false;

    if (reponseData.status) {
      this.editObj = reponseData.data;
      console.log("this.editObj",this.editObj)
    } else {
      this.dataService.openAlert(reponseData.status, reponseData.message);
    }
  });
}

 // Mint Process 
 mintprocess(idetails:any){
  console.log("AdminMintServiceAdminMintService",AdminMintService);
  this.postRequest  = 'yes';
   this.mintservice.SafeMINTFunction(idetails).then(async (respinfo: any) => {
    if(respinfo.status == true){
         var rdetails = respinfo.result;
         var tid = rdetails.events.Transfer.returnValues.tokenId;
         console.log("tttt",tid)
         this.dataService.postRequest('admin/itemupdate', { id: idetails._id,cresponse: rdetails,token_id:tid}).subscribe((success:any) => {
          let reponseData = success;
         // this.isGetBlogLoading = false;
          this.postRequest  = 'yes';
           this.dataService.openAlert(reponseData.status, reponseData.message);
          if (reponseData.status) {
            this.editObj = reponseData.data;
          } else {
              this.postRequest  = 'yes';
            this.dataService.openAlert(reponseData.status, reponseData.message);
          }
           this.route.navigateByUrl(environment.baseUrl + '/' + AppRoutes.itemlist);
        });
    }

   
     console.log("respinforespinforespinfo",respinfo)

   });

 }

}
