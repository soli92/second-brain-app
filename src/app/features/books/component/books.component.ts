import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/core/user-session/models/user-session.models';

import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { GetBooksRequest } from '../models/books-request.models';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'm2b-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public bookList: any[];
  private userData: UserData;

  constructor(
    private booksService: BooksService,
    private userSessionService: UserSessionService
  ) { }

  ngOnInit(): void {
    this.userData = this.userSessionService.getUserData();
    this.getBooksList();
  }

  public openDialog(event) {}

  private addNewBookItem(request) {
    this.booksService.insertNewBook(request)
  }

  private getBooksList() {
    const getBooksRequest: GetBooksRequest = {
      user_id: this.userData.user_id
    }
    this.booksService.getBooks(getBooksRequest)
      .subscribe(
        res => console.log('RES', res)
      )
  }

  

}
