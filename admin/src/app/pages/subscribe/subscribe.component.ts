import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/api/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  loading = false; postRequest = ''; totusrcnt = 0 ; subusrcnt = 0;
  f: any; config: any;  userslist = []; userstag = false; sublist :any = [];
  model: any ={ "type": 0, "subject": "", "message": "", "selectedusers": [] };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getList();
  } 

  changeType(e: any) {
    if (this.model.type == 2) {
      this.userstag = true;
    }else {
      this.userstag = false;      
    }
  }

  getList(){
    this.dataService.getRequest('admin/getletteremail').subscribe((reqData:any) => {
      this.subusrcnt = reqData.subcount;
      if(reqData.subs.length > 0){          
        for(var i in reqData.subs){
          this.sublist.push(reqData.subs[i].auth);        
    }
  }      
});
  }

  onSubmit() {
    if (this.model.subject == '') {
      this.dataService.openAlert(false, "Please enter the subject");
      return;
    }
    if(this.model.type == 2){
      if(this.model.selectedusers.length <= 0) {
        this.dataService.openAlert(false, "Please select minimum one email");
        return;
      }
    }
    this.model.selectedusers = this.sublist;
    this.postRequest = 'yes';
    this.dataService.postRequest('admin/sendnewsltr', this.model).subscribe((reqData:any) => {
      this.postRequest = '';
      if(reqData.status == true) {
        this.dataService.openAlert(true, reqData.msg);
        this.model ={ "type": 0, "subject": "", "message": "", "selectedusers": [] };
      } else {
        this.dataService.openAlert(false, reqData.msg);
      }   
    });
  } 
}
