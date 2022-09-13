import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from "src/app/common/services/api/data.service";
import { ToasterService } from "src/app/common/toaster/toaster.service";

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

	page: any; pageKey: any; blogObj: any = {};
  constructor(private route: ActivatedRoute,private router:Router, private conn: DataService,private toasterService: ToasterService) { }
  ngOnInit() {
    this.blogObj.pagekey = this.route.snapshot.queryParamMap.get('id');
    var Id = decodeURIComponent(this.blogObj.pagekey);
    this.pageKey = Id;
    this.getBlogDetails(Id);

  }

  getBlogDetails(param) {
  	this.conn.postRequest('getBlog', {id: param}).subscribe((result:any)=>{
      if(result.status){ 
        this.page = result.data;
      }
      else {
        this.toasterService.show(false, "Page not found");
      }
    });
  }

}
