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
export class SettingsService {
  @Output() buttonSubmit = new EventEmitter();
}
