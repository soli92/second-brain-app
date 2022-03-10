import { Component, Input, OnInit } from '@angular/core';
import { GenericTableListConfig } from '../models/generic-table-list.models';

@Component({
  selector: 'm2b-generic-table-list',
  templateUrl: './generic-table-list.component.html',
  styleUrls: ['./generic-table-list.component.scss']
})
export class GenericTableListComponent implements OnInit {
  @Input() tableListConfig: GenericTableListConfig<any>;
  listItems: any[];

  constructor() { }

  ngOnInit(): void {
    console.log('CONFIG', this.tableListConfig);
    this.listItems = [...this.tableListConfig.items];
  }

}
