import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { ApiGwService } from 'src/app/core/api-gw/service/api-gw.service';
import { HttpService } from 'src/app/core/http/services/http.service';
import { DeleteBookRequest, GetBookRequest, GetBooksRequest, InsertBookRequest } from '../models/books-request.models';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends ApiGwService {

  constructor(
    override httpService: HttpService
  ) {
    super(httpService, NerdyApiGwResources.BOOKS);
   }

  public getBooks(request: GetBooksRequest): Observable<any> {
    const urlPattern = '{{user_id}}';

    return this.getItemList(request, urlPattern);
  }

  public getBook(request: GetBookRequest): Observable<any> {
    const urlPattern = '{{user_id}}/{{book_id}}';

    return this.getItem(request, urlPattern);
  }

  public insertNewBook(request: InsertBookRequest): Observable<any> {
    console.log('INSERT BOOK REQUEST', request);
    return this.insert(request);
  }

  public deleteBook(request: DeleteBookRequest): Observable<any> {
    const urlPattern = '{{user_id}}/{{book_id}}';
    return this.deleteItem(request, urlPattern);
  }
  
}
