import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  rows = [];
  temp = [];

  columns = [{ prop: 'name' }, { name: 'Company' }, { name: 'Gender' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  tableTheme: string = 'material';

  constructor() {}

  ngOnInit() {
    fetch('https://swimlane.github.io/ngx-datatable/assets/data/company.json')
      .then(res => res.json())
      .then(json => {
        this.temp = [...json];
        this.rows = json;
      });
  }

  updateFilter(event) {
    console.log(this.table);
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return (d.name.toLowerCase().indexOf(val) !== -1 || 
      d.gender.toLowerCase().indexOf(val) !== -1 ||
      d.company.toLowerCase().indexOf(val) !== -1) || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  changeTableTheme( event : any ) {
    this.tableTheme = event.target.value;
  }

}
