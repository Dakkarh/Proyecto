import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../service/auth.service';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() table: string = "";
  @Input() columns: { column: string, title: string }[] = [];
  data: any[] = [];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private AuthService: AuthService) {
    this.dataSource.data = [{
      name:'Emerson',
      document:'1017250330',
      lastName:'Barranco'
    },
    {
      name:'Emerson',
      document:'1017250330',
      lastName:'Barranco'
    }]
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    $('.mat-paginator-page-size-label').html('Items por página.');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getColumnsValues(): string[] {
    return this.columns.map(column => column.column);
  }

}
