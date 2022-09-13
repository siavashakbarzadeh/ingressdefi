import { Component, OnInit, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.scss'],
})
export class ImgCropperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imgCrop: boolean = false;

  fileToReturn: any;
  data1: any;

  fileName: any;

  typeData: any;

  maintainAspectRatio: boolean = true;

  resizeToWidth: number = 0;
  resizeToHeight: number = 0;

  //  width and height
  cropperMinWidth: any = 0;
  cropperMinHeight: any = 0;

  //  width and height
  isWidth: any;
  imgWidth: any;
  imgHeight: any;
  isImgSizeError: any;
  isimgValid: any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.typeData = this.data;

    if (this.typeData.maintainAspectRatio != undefined) {
      this.maintainAspectRatio = this.typeData.maintainAspectRatio;
    }

    console.log(this.typeData, 'this.typeData');
    if (this.typeData.resizeToHeight) {
      this.resizeToWidth = this.typeData.resizeToWidth;
      this.resizeToHeight = this.typeData.resizeToHeight;

      console.log(this.cropperMinHeight, 'this.cropperMinHeight ');
    }

    //  Image width and Height

    if (this.typeData.isWidth) {
      this.isWidth = true;
      this.imgHeight = this.typeData.width;
      this.imgWidth = this.typeData.height;
      this.cropperMinWidth = this.imgHeight;
      this.cropperMinHeight = this.imgWidth;

      console.log(this.imgWidth, ' this.imgWidth');
    }
  }

  onClick(val: any): void {
    if (!val) {
      this.dialogRef.close('false');
    } else {
      if (this.typeData.output == 'blop') {
        let res = {
          blop: this.fileToReturn,
          base64: this.croppedImage,
        };

        this.dialogRef.close(res);
      } else {
        this.dialogRef.close(this.croppedImage);
      }
    }
  }

  fileChangeEvent(event: any) {
    if (this.isWidth) {
      const URL = window.URL;
      const Img = new Image();

      const filesToUpload = event.target.files;
      Img.src = URL.createObjectURL(filesToUpload[0]);

      Img.onload = (e: any): any => {
        const height = e.path[0].height;
        const width = e.path[0].width;
        if (this.imgWidth < width && this.imgHeight < height) {
          this.isimgValid = false;
          this.fileUploadImg(event);
        } else {
          this.isimgValid = true;
          return true;
        }
      };
    } else {
      this.fileUploadImg(event);
    }
  }

  fileUploadImg(event: any) {
    if (event.target.files.length > 0) {
      this.imgCrop = true;
      this.imageChangedEvent = event;
      this.fileName = event.target.files[0].name;
    }
  }

  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImage = event.base64;
  // }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  imageCropped(event: ImageCroppedEvent) {
    // Preview
    this.croppedImage = event.base64;
    this.fileToReturn = this.base64ToFile(event.base64, this.fileName);
    return this.fileToReturn;
  }

  base64ToFile(data: any, filename: any) {
    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}
