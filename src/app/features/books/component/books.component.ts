import { Component, OnInit } from '@angular/core';
import { ConsoleLogger } from '@aws-amplify/core';
import { request } from 'http';
import { UserData } from 'src/app/core/user-session/models/user-session.models';

import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { GenericFormMode } from 'src/app/shared/generic-form/enums/generic-form-mode.enum';
import { IGenericFormActionButtonEvent } from 'src/app/shared/generic-form/models/generic-form-action-button.models';
import { GenericFormConfigModel } from 'src/app/shared/generic-form/models/generic-form-config.model';
import { BOOKS_FORM_CONFIG } from '../models/book-form.config';
import { GetBooksRequest, InsertBookRequest } from '../models/books-request.models';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'm2b-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public bookList: any[];
  public formMode: GenericFormMode;
  public config: GenericFormConfigModel = BOOKS_FORM_CONFIG;
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

  public formActionButtonClicked(event: IGenericFormActionButtonEvent) {
    console.log('FORM ACTION BUTTON CLICKED', event);

    switch (event.buttonClicked) {

      case GenericFormMode.INSERT:
        const request: InsertBookRequest = {
          user_id: this.userData.user_id,
          data: event.data
        };

        this.addNewBookItem(request);
      break;

      case GenericFormMode.EDIT:
      break;

      case GenericFormMode.DELETE:
      break;

      default:
        console.log('Unsupported method');
      break;
    }
  }

  private addNewBookItem(request: InsertBookRequest) {
    console.log('Insert New Book Request', request);
    this.booksService
      .insertNewBook(request)
      .subscribe(
        res => {
          console.log(res);
        }
      )
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
