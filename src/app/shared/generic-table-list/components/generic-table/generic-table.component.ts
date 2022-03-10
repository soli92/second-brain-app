import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GenerciTableListElemConfig } from '../../models/generic-table-list.models';
import { GenericTableConfig } from './models/generic-table.models';

@Component({
  selector: 'm2b-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [];
  @Input() public config: any = {};
  public genericTableListElemConfigs: GenerciTableListElemConfig<any>[];
  public _dataSource: any[];

  public itemsConfig: GenericTableConfig[]

  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
      this._initTableParams();
  }

  private _initTableParams() {
    console.log('DATA SOURCE', this.config);
    this._dataSource= this.config.items.map(
      elem => {
        Object.keys(elem).forEach(
          key => {
            this.displayedColumns.push(key);
            const tableItem: GenericTableConfig = {
              key,
              title: this.getTitleFromKey(key)
            }
            this.itemsConfig.push(tableItem);
          }
        )
      }
    )
  }

  private getTitleFromKey(key: string) {
    let title: string = '';
    title = key.toUpperCase();
    return title
  }

}
