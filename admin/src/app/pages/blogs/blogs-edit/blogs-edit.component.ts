import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { DataService } from 'src/app/common/api/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/common/routes/app-url';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogs-edit',
  templateUrl: './blogs-edit.component.html',
  styleUrls: ['./blogs-edit.component.scss']
})
export class BlogsEditComponent implements OnInit {
  loading = true; postRequest = ''; disable:Boolean=false; pageType = "";
  actionType = ''; newsUrl = ""; editFeature = true; displayNoRecords:any;
  chngmode:boolean = true; changeUploadTriggered:boolean = true;
  token = localStorage.getItem('Key'); per = false; access:any;
  config:any; editObj: any = {};
  isFormSubmitted: boolean = false;
  isGetBlogLoading = true;
  isDataPassing = false;

  model = {"_id":"","title":"","description":"","content":"","blog_image":"","status":1};

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
  this.editObj.blog_image = file;

} 

getSingleData() {
  this.isGetBlogLoading = true;
  this.dataService.postRequest('admin/getblogs', { id: this.editObj.pagekey }).subscribe((success) => {
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
    this.editObj = {"_id":"","title": "", "description":"","content":"", "blog_image":"", "status":1};
  }

  onSubmit() {
    let actionUrl = '';
    if(this.pageType=='edit') {
      actionUrl = 'blogUpdate';
    } else {
      actionUrl = 'blogAdd';
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
    
    if(typeof this.editObj.blog_image['name'] != 'undefined' && typeof this.editObj.blog_image['name'] != undefined)
    {   
      formData.append('blog_img', this.editObj.blog_image);
    } else {
      formData.append('blog_img', this.editObj.blog_image);
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
      this.route.navigateByUrl(environment.baseUrl + '/' + AppRoutes.blogs_list);
    });
  }

  public redirectToEdit = (data : any) => {
    let sts = data.status=="Active"?1:0;
    this.actionType = 'edit';
    this.chngmode=true;
    this.pageType = 'edit';
    this.editObj = {"_id":data._id,"title":data.title,"description":data.description,"content":data.content,"status":sts,"blog_image":""};
    this.newsUrl = data.blog_image;
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
