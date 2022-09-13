import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralService } from '../services/general/general.service';

export type ImagesFields = {
  img: any;
  imgName: any;
  file: any;
};

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  image: any;
  isSrc = false;

  newImg: any;

  editObj: ImagesFields = {
    img: '',
    imgName: '',
    file: '',
  };

  @Input() in = new EventEmitter();
  @Output() out = new EventEmitter();
  @Output() allOut = new EventEmitter();

  constructor(public general: GeneralService) {}

  ngOnInit(): void {
    this.editObj.imgName = this.in;
    this.editObj.img = this.in;
  }

  closeImg() {
    if (this.editObj.img) {
      this.editObj.img = '';
      this.editObj.imgName = '';
      this.isSrc = false;
    } else {
    }
  }

  uploadFile(file: any, event: any): any {
    let isImage: boolean = this.general.isFile(file, event, 'img');

    const fileType = event.target.files && event.target.files[0];

    if (!isImage) {
      return false;
    }

    if (event.target.files.length > 0) {
      this.newImg = event.target.files[0];
      let newImgName = event.target.files[0].name;
      this.editObj.imgName = event.target.files[0].name;
      this.editObj.file = event.target.files[0];

      // this.isImage = true;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.editObj.img = event.target.result;
        this.isSrc = true;
        this.out.emit(this.editObj.imgName);
        this.allOut.emit(this.editObj);

        if (fileType.type.indexOf('image') > -1) {
        } else if (fileType.type.indexOf('video') > -1) {
          //  this.url = (<FileReader>event.target).result;
        }
      };
    }
  }
}
