import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feature-edit',
  templateUrl: './feature-edit.component.html',
  styleUrls: ['./feature-edit.component.scss']
})
export class FeatureEditComponent implements OnInit {
  loading = true; postRequest = ''; disable:Boolean=false; pageType = "";
  actionType = ''; newsUrl = ""; editFeature = true; displayNoRecords:any;
  chngmode:boolean = true; changeUploadTriggered:boolean = true;
  token = localStorage.getItem('Key'); per = false; access:any;
  config:any; editObj: any = {};
  isFormSubmitted: boolean = false;
  isGetBlogLoading = true;
  isDataPassing = false;

  model = {"_id":"","title":"","description":"","content":"","features_img":"","status":1};

  constructor(
    private dataService: DataService,
    public general: GeneralService,
    private activatedRoute: ActivatedRoute,
    private route: Router
    ) {
    this.config=this.dataService.geteditorconfig()  

  }

  ngOnInit() {
    this.setBlogObj();
    this.editObj.pagekey = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.editObj.pagekey == 'new') {
      this.isGetBlogLoading = false;
    } else {
      this.getSingleData();
    }
  }

  setBlogObj() {
    this.editObj = {
      title: '',
      pagecontent: '',
      pagekey: 'new',
      status: 1,
    };
  }

  onFileChanged(event: any) {
    let reader = new FileReader();
    const name = event.target.name;
    const file = event.target.files[0];
    let typeFile = event.target.files[0].type;
    let file_size = event.target.files[0].size / 1024 / 1024;
    
    if(file_size >= 2) {
      this.dataService.openAlert( "error", "Upload image should be less than or equal to 2MB");
      this.changeUploadTriggered = false;
      return;
    }

    if(typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
      this.dataService.openAlert( "error", "Invalid image format");
      this.changeUploadTriggered = false;
      return;
    }
    reader.onload = (e: any) => {
      var img = new Image();
      img.src = e.target.result;
      this.editObj.image = e.target.result;
      // console.log(img.height,img.width)
    // if ((img.height <= 250) ||( img.width <= 700)) {
    //         this.dataService.openAlert("error","Minimum 250px height and 700px width required");
    //         this.changeUploadTriggered = false;
    //          img.src = "";
    //         // this.newsUrl = "";
    //         return;
    //       }
  }

  this.changeUploadTriggered = true;    
  reader.readAsDataURL(file); 
  this.editObj.features_img = file;

} 

getSingleData() {
  this.isGetBlogLoading = true;
  this.dataService.postRequest('admin/getfeatures', { id: this.editObj.pagekey }).subscribe((success) => {
    let reponseData: any = success;
    this.isGetBlogLoading = false;

    if (reponseData.status) {
      this.editObj = reponseData.data;
    } else {
      this.dataService.openAlert(reponseData.status, reponseData.message);
    }
  });
}

dateFormats(date: Date){
    //this.date=new Date();
    // let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd H:mm:ss');
    // return latest_date;
  }

  public cancelToEdit = () => {
    this.actionType = 'all';
    this.changeUploadTriggered = true;
  }

  public redirectToAdd = () => {
    this.actionType = 'edit';
    this.chngmode=false;
    this.pageType = 'add';
    this.newsUrl = "";
    this.editObj = {"_id":"","title": "", "description":"","content":"", "features_img":"", "status":1};
  }

  onSubmit() {
    let actionUrl = '';
    if(this.pageType=='edit') {
      actionUrl = 'featuresUpdate';
    } else {
      actionUrl = 'featuresAdd';
    }

    // check upload image valid
    if(!this.changeUploadTriggered) {
      this.dataService.openAlert(false, 'Invalid image/format.');
      return;
    } 
    var a = this.editObj.title.trim();
    var c = this.editObj.pagecontent.trim();
    if(a.length == 0 || c.length == 0){
      this.dataService.openAlert(false, 'Form must be valid');
      return;
    }
    this.postRequest = 'yes';
    const formData = new FormData();
    formData.append('_id', this.editObj._id);
    formData.append('title', this.editObj.title);
    formData.append('pagecontent', this.editObj.pagecontent);
    formData.append('status', String(this.editObj.status));
    
    if(typeof this.editObj.features_img['name'] != 'undefined' && typeof this.editObj.features_img['name'] != undefined)
    {   
      formData.append('features_img', this.editObj.features_img);
    } else {
      formData.append('features_img', this.editObj.features_img);
    } 

    // setting update data
    this.dataService.filePostRequest('admin/'+actionUrl, formData).subscribe((reqData: any) => {
      //console.log(reqData);
      this.postRequest = '';
      if(reqData.status == true) {
        // this.getAll();
        this.dataService.openAlert(true, reqData.msg);
      } else {
        this.dataService.openAlert(false, reqData.msg);
      }
      this.route.navigateByUrl(environment.baseUrl + '/' + AppRoutes.features_list);
    });
  }

  public redirectToEdit = (data : any) => {
    let sts = data.status=="Active"?1:0;
    this.actionType = 'edit';
    this.chngmode=true;
    this.pageType = 'edit';
    this.editObj = {"_id":data._id,"title":data.title,"description":data.description,"content":data.content,"status":sts,"features_img":""};
    this.newsUrl = data.features_img;
  }

  public openConfirmationDialog(id: string) {
    if(confirm('Are you sure want to delete?')) {
     this.doDelete(id)
   }
 }

 doDelete (id: string) {
  this.dataService.getRequest('cms/newsDelete/'+id)
  .subscribe((reqData: any) => {
    if(reqData.status == true) {
        // this.getAll();
        this.dataService.openAlert(true, reqData.msg);
      } else {
        this.dataService.openAlert(false, reqData.msg);
      }
    })
}
}
