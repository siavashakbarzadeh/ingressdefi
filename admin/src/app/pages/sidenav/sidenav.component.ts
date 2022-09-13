import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Menus } from 'src/app/common/routes/menus';
import { DataService } from 'src/app/common/api/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menusObj: any = {
    isShowFiller: true,
    modeType: 'side',
    autosize: false,
    isExpend: true,
  };

  @Output() eventChange = new EventEmitter();

  menusList: any = Menus;

  sideMenuIndex: any;

  isOpenMenu = true;

  constructor(public dataService: DataService) {
    this.eventChange.emit(this.menusObj);
  }

  ngOnInit(): void {}

  menuHoverOpen() {
    if (!this.isOpenMenu) {
      this.menusObj.isShowFiller = true;
    }
  }

  menuHoverClose() {
    if (!this.isOpenMenu) {
      this.menusObj.isShowFiller = false;
    }
  }

  menuToggle() {
    if (this.isOpenMenu) {
      this.isOpenMenu = false;
      this.menusObj.isShowFiller = false;
    } else {
      this.isOpenMenu = true;
    }
  }


}
