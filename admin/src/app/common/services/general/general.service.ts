import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  //  Pattern Area
  specialCharacterPattern = '^(?=.*[a-zA-Z])[a-zA-Z0-9]+$';
  passwordPattern =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~#^$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}';
  numberPattern = '^[0-9]*$';
  alphaNumericPattern = '^(?=.*[a-zA-Z])[a-zA-Z0-9]+$';
  floatNumber = '[+-]?([0-9]*[.])?[0-9]+';
  stringWithSpace = '^[a-zA-Z_ ]*$';
  passwordLength = 8;

  ipPattern =
    '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';

  constructor(private snackBar: MatSnackBar) {}

  checkError(val: any, val2: any, pattern?: String): any {
    if (val.errors.hasOwnProperty('required')) {
      return val2 + ' is required';
    } else if (val.errors.hasOwnProperty('email')) {
      return 'Please enter a valid email address';
    } else if (val.errors.pattern) {
      if (pattern == 'specialChar') {
        return 'Special characters not allowed';
      } else if (pattern == 'password') {
        return 'Password must contain atleast one uppercase, One lowercase, One numeric digit, One special character, 8 characters';
      } else if (pattern == 'cPassword') {
        return 'Password Mismatch';
      } else if (pattern == 'number') {
        return val2 + ' should be numerical';
      } else if (pattern == 'alphaNumeric') {
        return (
          val2 +
          ' contain only Alphanumeric characters and atleast one character'
        );
      } else if (pattern == 'ip') {
        return 'Enter Valid Ip Address';
      }
    } else if (val.errors.minlength) {
      return 'Min length is ' + val.errors.minlength.requiredLength;
    } else if (val.errors.whitespace) {
      return 'White Space ';
    } else if (val.errors.matDatepickerMin) {
      return 'Date is expired ';
    }
  }

  openNewWindow(val: string, type?: any) {
    let url: any = String(val);
    let myWindow: any = window.open('', '_blank');

    console.log(type, '_type');

    if (type && type.toLowerCase() == 'video') {
      myWindow.document.write(
        `<img> <video src="${url}"  height="200" controls></video>`
      );
    } else {
      myWindow.document.write(`<img src="${url}">`);
    }
  }

  isFile(files: FileList, event: any, type: any): any {
    if (type && type.toLowerCase() == 'video') {
      if (event.target.files && event.target.files[0]) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          let typeFile = file.type;
          let file_size = file.size / 1024 / 1024;

          if (typeFile != 'video/mp4') {
            this.openAlert(false, 'Invalid video format');
            return false;
          } else if (file_size >= 2) {
            this.openAlert(
              false,
              'Upload video should be less than or equal to 2MB'
            );
            return false;
          } else {
            return true;
          }
        }
      }
    } else {
      if (event.target.files && event.target.files[0]) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          let typeFile = file.type;
          let file_size = file.size / 1024 / 1024;
          if (
            typeFile != 'image/png' &&
            typeFile != 'image/jpg' &&
            typeFile != 'image/jpeg'
          ) {
            this.openAlert(false, 'Invalid image format');
            return false;
          } else if (file_size >= 2) {
            this.openAlert(
              false,
              'Upload image should be less than or equal to 2MB'
            );
            return false;
          } else {
            return true;
          }
        }
      }
    }
  }

  openAlert(isTrue: any, message: any) {
    let bgClass;
    if (isTrue === 'true' || isTrue === true) {
      bgClass = 'bg-success';
    } else {
      bgClass = 'bg-error';
    }
    this.snackBar.open(message, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: bgClass,
    });
  }

  loaded(event: any) {
    event.classList.remove('is-loading-secondary');
  }

  removingSpaceFirst(event: KeyboardEvent, val: any, number?: any) {
    if (event.which === 32 && !val.length) {
      event.preventDefault();
    }
  }
  removingSpace(event: KeyboardEvent) {
    if (event.which === 32) {
      event.preventDefault();
    }
  }
}
