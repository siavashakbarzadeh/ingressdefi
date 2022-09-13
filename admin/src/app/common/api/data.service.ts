import {
  Injectable,
  HostListener,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isGoerli = false;
  isMetaExtension = true;

  private REST_API_SERVER = environment.apiUrl;

  token: any;

  dateTime = 'yyyy-MM-dd H:mm:ss';

  isLogin: any;

  isOverlay = false;
  isMetaLogin = false;
  maintean = true; //dafault true , because check first maintain api
  userBlock = false;

  siteData: any;

  @Output() public isLoginCheck = new EventEmitter();
  @Output() public isMetaLoginCheck = new EventEmitter();
  @Output() public networkChanged = new EventEmitter();

  metaDetails = {
    isMetaLogin: false,
    account: '',
    accountShort: '',
  };

  projectDetails = {
    logo: environment.logo,
    name: environment.projectName,
  };

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    @Inject(Router) private router: Router
    ) {
    this.token = localStorage.getItem('key');
  }

  metaLogout() {
    this.metaDetails.isMetaLogin = false;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    // if (error.status == 500) {
    //   localStorage.clear();
    //   this.router.navigate([environment.baseUrl]);
    // }

    // if (error.status == 401) {
    //   localStorage.clear();
    //   this.router.navigate([environment.baseUrl]);
    // }

    // console.log(error, 'error.erro');

    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public upload(url: String, formData: any) {
    return this.httpClient.post<any>(this.REST_API_SERVER + url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public sendGetRequest() {
    this.token = localStorage.getItem('key');

    return this.httpClient
    .get(this.REST_API_SERVER)
    .pipe(retry(3), catchError(this.handleError));
  }

  public postRequestLogin(url: String, requestData: any) {
    this.token = localStorage.getItem('key');

    // this.headers.append("Expires", new Date(Date.now() + 2592000000).toUTCString());
    let time: any = localStorage.getItem('datetime');

    const headers = new HttpHeaders()
    .set('cache-control', 'no-cache')
    .set('content-type', 'application/json')
    .set('X-XSS-Protection', '1; mode=block')
    .set('Cache-Control', 'public, max-age=2592000')
    .set('Expires', time)
    .set('Authorization', 'Bearer ' + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public postRequest(url: String, requestData: any) {
    this.token = localStorage.getItem('key');

    const headers = new HttpHeaders()
    .set('cache-control', 'no-cache')
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public postBiconomy(url: any, requestData: any) {
    this.token = localStorage.getItem('key');

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('x-api-key', 'kM39iFoMc.cfa138e6-ed25-44db-ac85-177077da8f31');

    return this.httpClient
    .post(url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public filePostRequest(url: String, requestData: any) {
    this.token = localStorage.getItem('key');

    const headers = new HttpHeaders()
    .set('cache-control', 'no-cache')
    .set('Authorization', 'Bearer ' + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public getRequest(url: String) {
    this.token = localStorage.getItem('key');

    const headers = new HttpHeaders()
    .set('cache-control', 'no-cache')
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + this.token);

    return this.httpClient
    .get(this.REST_API_SERVER + url, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  checkIp(): Observable<any> {
    this.token = localStorage.getItem("key");
    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("Authorization", "Bearer " + this.token);
    return this.httpClient.post(this.REST_API_SERVER + 'admin/chkipaddress', { headers: headers });
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

  metaCheck(): boolean {
    let locaValue = localStorage.getItem('account');
    let localLogin = localStorage.getItem('key');

    if (!localLogin) {
      localStorage.removeItem('account');
    }

    if (locaValue) {
      this.isMetaLogin = true;
      return true;
    } else {
      this.openAlert(false, 'Need to Login Meta Mask');
      return false;
    }
  }

  metaProcess() {
    window.addEventListener('beforeunload', (event) => {
      if (this.isOverlay)
        event.returnValue = `You have unsaved changes, leave anyway?`;
    });
  }

  public jsonFile(): Observable<any> {
    return this.httpClient.get('../../../assets/json/language/en.json');
  }

  goTo(type: any, value: any) {
    let url = `https://bscscan.com//${type}/${value}`;
    window.open(url, '_blank');
  }

  copyText(value: any) {
    console.log(value, '___________ value');
    let copyText: any = value;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = copyText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.openAlert(true, 'Copied Suceedfully');
  }

  geteditorconfig() {
    var config: any;
    return config = {
      uiColor: '#ffffff',
      fillEmptyBlocks: false,
      tabSpaces: 0,
      toolbarGroups: [{ name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
      { name: 'links' }, { name: 'insert' },
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] },
      { name: 'styles' },
      { name: 'colors' }],
      skin: 'kama',
      resize_enabled: false,
      addTargetToExternalLinks: true,
      removePlugins: 'elementspath,save,magicline',
      extraPlugins: 'divarea,smiley,justify,indentblock,colordialog',
      colorButton_foreStyle: {
        element: 'font',
        attributes: { 'color': '#(color)' }
      },
      height: 250,
      format_tags: 'p;h1;h2;h3;pre;div'
    }
  }
}
