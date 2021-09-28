import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  records: any;
  tableHeader: string = 'header-dark';
  tableTheme: string = 'ion-border';

  constructor() {}

  ngOnInit() {
    fetch('https://swimlane.github.io/ngx-datatable/assets/data/company.json').then(res => res.json())
      .then(json => {
        console.log(json);
        this.records = json;
      });
  }

  changeTableHeader( color: string ) {
    this.tableHeader = 'header-'+color;
  }

  changeTableTheme( theme: string ) {
    console.log(theme);
    this.tableTheme = theme;
  }

}
