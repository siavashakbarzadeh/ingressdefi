import {
  Injectable,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Observable, Subject, BehaviorSubject } from "rxjs";

export interface MetaDeatail {
  account: String;
  isMetaLogin: boolean;
  balance: "";
  accountShort: any;
  governanceTokenBalance: any;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  metaDeatails: MetaDeatail = {
    account: "",
    isMetaLogin: false,
    balance: "",
    accountShort: "",
    governanceTokenBalance: "",
  };

  projectDetails = {
    name: environment.projectName,
    tokenName: environment.tokenName,
  };

  isGoerli = false;
  isMetaExtension = true;

  private REST_API_SERVER = environment.apiUrl;

  token;

  dateTime = "yyyy-MM-dd H:mm:ss";

  isLogin: any;

  isOverlay = false;
  isMetaLogin = false;
  maintean = true; //dafault true , because check first maintain api
  userBlock = false;

  siteData: any;
  fixNumber: any = "1.4-8";

  isMainLoader = true;

  private urlSource = new BehaviorSubject({});
  actUrl = this.urlSource.asObservable();

  @Output() public isLoginCheck = new EventEmitter();
  @Output() public isMetaLoginCheck = new EventEmitter();
  @Output() public isNetworkChange = new EventEmitter();
  @Output() public changeDetector = new EventEmitter();

  @Output() public showWalletList = new EventEmitter();

  @Output() public accountsChanged = new EventEmitter(); // MetaMask Account Changed
  @Output() public networkChanged = new EventEmitter(); // MetaMask Network Changed
  @Output() public isMetaReady = new EventEmitter(); // MetaMask Network Changed
  @Output() public footerContent = new EventEmitter();
  @Output() public modelSignup = new EventEmitter();

  explorerLink = "https://bscscan.com/";

  constructor(private httpClient: HttpClient) {
    // this.token = localStorage.getItem("Game-Token");
  }

  activeUrl(uri) {
    this.urlSource.next(uri);
  }

  metaLogout() {
    this.metaDeatails = {
      account: "",
      isMetaLogin: false,
      balance: "",
      accountShort: "",
      governanceTokenBalance: "",
    };
    this.isMetaReady.emit(false);
  }

  openAddress() {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
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

  public sendGetRequest() {
    this.token = localStorage.getItem("Game-Token");

    return this.httpClient
    .get(this.REST_API_SERVER)
    .pipe(retry(3), catchError(this.handleError));
  }

  public postRequestLogin(url, requestData) {
    this.token = localStorage.getItem("Game-Token");

    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("content-type", "application/json")
    .set("Authorization", "Bearer " + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public postRequest(url, requestData) {
    this.token = localStorage.getItem("Game-Token");
    // console.log(this.token, 'this.token');
    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("content-type", "application/json")
    .set("Authorization", "Bearer " + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public postBiconomy(url, requestData) {
    this.token = localStorage.getItem("Game-Token");

    // api-key-old = kM39iFoMc.cfa138e6-ed25-44db-ac85-177077da8f31

    const headers = new HttpHeaders()
    .set("Content-Type", "application/json;charset=utf-8")
    .set("x-api-key", "kM39iFoMc.cfa138e6-ed25-44db-ac85-177077da8f31");

    return this.httpClient
    .post(url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public filePostRequest(url, requestData) {
    this.token = localStorage.getItem("Game-Token");

    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("Authorization", "Bearer " + this.token);

    return this.httpClient
    .post(this.REST_API_SERVER + url, requestData, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  public getRequest(url) {
    this.token = localStorage.getItem("Game-Token");
    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("content-type", "application/json")
    .set("Authorization", "Bearer " + this.token);

    return this.httpClient
    .get(this.REST_API_SERVER + url, { headers: headers })
    .pipe(catchError(this.handleError));
  }

  metaCheck(): boolean {
    let locaValue = localStorage.getItem("account");
    let localLogin = localStorage.getItem("Game-Token");

    if (!localLogin) {
      localStorage.removeItem("account");
    }

    // this.metaService.getAccount().then((suc) => {
    //   console.log(suc);
    // });

    if (locaValue) {
      this.isMetaLogin = true;
      return true;
    } else {
      return false;
    }
  }

  metaProcess() {
    window.addEventListener("beforeunload", (event) => {
      if (this.isOverlay)
        event.returnValue = `You have unsaved changes, leave anyway?`;
    });
  }

  openEtherscan(transctionId: string) {
    let url = "https://goerli.etherscan.io/tx/" + transctionId;
    window.open(url, "_blank");
  }

  openBscScan(address) {
    // https://bscscan.com/address/
    let url = "https://bscscan.com/" + address;
    window.open(url, "_blank");
  }

  checkNumber(event: KeyboardEvent) {
    if (event.which === 45 || event.which === 43 || event.which === 101) {
      event.preventDefault();
    }
  }

  checkProfile(): Observable<any> {
    this.token = localStorage.getItem("Game-Token");
    const headers = new HttpHeaders()
    .set("cache-control", "no-cache")
    .set("Authorization", "Bearer " + this.token);
    return this.httpClient.get(this.REST_API_SERVER + 'users/check_profile', { headers: headers });
  }
}
