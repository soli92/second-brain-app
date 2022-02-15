import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {
  private googleDriveApiPrefix = environment.googleApiPrefix + '/drive/v2';

  constructor(
    private httpClient: HttpClient
  ) { }
}
