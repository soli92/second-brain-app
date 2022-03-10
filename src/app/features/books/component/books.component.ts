import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConsoleLogger } from '@aws-amplify/core';
import { time } from 'console';
import { request } from 'http';
import { NerdyApiGwResources } from 'src/app/core/api-gw/models/api-gw.models';
import { UserData } from 'src/app/core/user-session/models/user-session.models';

import { UserSessionService } from 'src/app/core/user-session/service/user-session.service';
import { GenericFormComponent } from 'src/app/shared/generic-form/component/generic-form.component';
import { GenericFormMode } from 'src/app/shared/generic-form/enums/generic-form-mode.enum';
import { IGenericFormActionButtonEvent } from 'src/app/shared/generic-form/models/generic-form-action-button.models';
import { GenericFormConfigModel } from 'src/app/shared/generic-form/models/generic-form-config.model';
import { GenericFormDataModel } from 'src/app/shared/generic-form/models/generic-form-data.models';
import { GenericTableListConfig, GenericTableListType } from 'src/app/shared/generic-table-list/models/generic-table-list.models';
import { BOOKS_FORM_CONFIG } from '../models/book-form.config';
import { BookItemModel } from '../models/book-item.model';
import { GetBooksRequest, InsertBookRequest } from '../models/books-request.models';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'm2b-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public bookList: BookItemModel[];
  public formMode: GenericFormMode;
  public config: GenericFormConfigModel = BOOKS_FORM_CONFIG;
  public tableConfig: GenericTableListConfig<BookItemModel> = {
    mode: GenericTableListType.TABLE,
    items: []
  };
  public isLoading: boolean = true;
  private userData: UserData;

  constructor(
    private booksService: BooksService,
    private _dialog: MatDialog,
    private userSessionService: UserSessionService
  ) { }

  ngOnInit(): void {
    this.userData = this.userSessionService.getUserData();
    this.getBooksList();
  }

  public openDialog(event) {
    const genericFormData: GenericFormDataModel = {
      scope: NerdyApiGwResources.BOOKS,
      mode: GenericFormMode.INSERT,
      formConfig: BOOKS_FORM_CONFIG,
      title: 'Insert new Book'
    };

    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width = '50%';
    matDialogConfig.data = genericFormData;

    this._dialog.open(
      GenericFormComponent,
      matDialogConfig
    ).afterClosed()
    .subscribe((event: IGenericFormActionButtonEvent) => {
      console.log('REs', event);
      if (event) {
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
        };
      };
      this.getBooksList();
    })
  }

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
    this.isLoading = true;

    const getBooksRequest: GetBooksRequest = {
      user_id: this.userData.user_id
    };

    this.booksService.getBooks(getBooksRequest)
      .subscribe(
        res => {
          this.bookList = res.items;
          this.tableConfig.items = this.bookList;
          this.isLoading = false;
          console.log('RES', res)
        }
      )
  }


}
