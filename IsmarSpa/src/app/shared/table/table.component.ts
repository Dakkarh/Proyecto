import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../service/auth.service';
import { BdService } from 'src/app/service/bd.service';
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
  @Output() update = new EventEmitter();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private bd: BdService) {

  }

  ngOnInit(): void {

    if (this.table === 'users') {
      this.bd.getUsers().subscribe(user => {
        this.dataSource.data = user;
      });
    } else if (this.table === 'products') {

    }

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
    return this.columns.map(column => column.column).concat('action');
  }


  updateData(id: string) {
    if (id!='') {
      this.update.emit(id);
    }
  }

}
