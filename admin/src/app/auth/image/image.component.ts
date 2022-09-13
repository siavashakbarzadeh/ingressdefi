import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  xValueStart = 160;
  xValueEnd = 180;
  YValueStart = 90;
  YValueEnd = 110;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  point(event: any) {
    let pos_x;
    let pos_y;

    var pointer_div: any = document.getElementById('pointer_div');
    pos_x = event.offsetX
      ? event.offsetX
      : event.pageX - pointer_div.offsetLeft;
    pos_y = event.offsetY ? event.offsetY : event.pageY - pointer_div.offsetTop;

    if (
      pos_x > this.xValueStart &&
      pos_x < this.xValueEnd &&
      pos_y > this.YValueStart &&
      pos_y < this.YValueEnd
    ) {
      localStorage.setItem('isImage', 'true');
      this.router.navigateByUrl(environment.baseUrl + '/auth/login');
      console.log('okay');
    } else {
      console.log('not okay');
    }

    console.log(pos_y, '++++++++++ this.myDiv.nativeElement');
  }
}
