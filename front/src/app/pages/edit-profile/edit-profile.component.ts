import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editObj: any = {
    profilepicture: '',
    profile_picture: ''
  };
  upload = false;
  fileerr = false;
  submitted = false;

  constructor(
    public service: DataService, 
    private toasterService: ToasterService, 
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getRequest('users/getuser').subscribe((success) => {
      let reponseData: any = success;
      if (reponseData.status) {
        this.editObj = reponseData.data;
      } else {
        this.toasterService.show(false, reponseData.msg);
      }
    });
  }

  onChanged(event: any) {
    let reader = new FileReader();
    const name = event.target.name;
    const file = event.target.files[0];
    let typeFile = event.target.files[0].type;
    let file_size = event.target.files[0].size / 720 / 720;

    if(typeFile != "image/png" && typeFile != "image/jpg" && typeFile != "image/jpeg") {
      this.fileerr = true;
      return;
    }

    if(file_size >= 2) {
      this.fileerr = true;
      return;
    }

    reader.onload = (e: any) => {
      var img = new Image();
      img.src = e.target.result;
      this.editObj.profilepicture = e.target.result;
    }
    this.fileerr = false;    
    this.upload = true;    
    reader.readAsDataURL(file); 
    this.editObj.profile_picture = file;
  }

  onSubmit() {
    this.submitted = true;
    const formData = new FormData();
    formData.append('name', this.editObj.name);
    formData.append('username', this.editObj.username);
    formData.append('email', this.editObj.auth);
    formData.append('location', this.editObj.location);
    formData.append('bio', this.editObj.bio);
    if(typeof this.editObj.profile_picture['name'] != 'undefined' && typeof this.editObj.profile_picture['name'] != undefined) { 
      formData.append('profile_img', this.editObj.profile_picture);
    } else {
      formData.append('profile_img', this.editObj.profile_picture);
    }
    this.service.filePostRequest('users/editprofile', formData).subscribe((reqData: any) => {
      this.submitted = false;
      if(reqData.status == true) {
        this.toasterService.show(true, reqData.msg);
      } else {
        this.toasterService.show(false, reqData.msg);
      }
    });
  }
}
