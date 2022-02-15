import { HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/services/http.service';
import { environment } from 'src/environments/environment';
import { GoogleBooksSearchQuery, GoogleBooksSearchTerms } from '../models/google-books.models';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private googleBooksEndpoint = environment.googleApiPrefix + '/books/v1';

  constructor(
    private httpService: HttpService
  ) { }

  public search(text:string, term: GoogleBooksSearchTerms = GoogleBooksSearchTerms.TITLE) {
    const query = new GoogleBooksSearchQuery({[term]: text}).getQuery();
    const paramsOption: HttpParamsOptions = {
      fromObject: {
        q: query
      }
    }
    const params = new HttpParams(paramsOption);
    return this.httpService.get(
      this.googleBooksEndpoint,
      {
        params
      })
  }
}
