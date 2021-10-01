import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['name', 'gender', 'company'];
  records = new MatTableDataSource;

  length: number = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    fetch('https://swimlane.github.io/ngx-datatable/assets/data/company.json').then(res => res.json())
    .then(json => {
      this.records.data = json;
      this.length = this.records.data.length;
      this.records.paginator = this.paginator;
      this.records.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.records.filter = filterValue.trim().toLowerCase();

    if (this.records.paginator) {
      this.records.paginator.firstPage();
    }
  }

}
