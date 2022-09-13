import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/common/services/api/data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: any = {};

  constructor(
    public dataService: DataService,
    ) { }

  ngOnInit() {
    this.dataService.footerContent.subscribe((response:any) => {
      this.footer = response;
    }); 
  }

}
