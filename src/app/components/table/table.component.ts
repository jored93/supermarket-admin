import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomerElement } from '../../views/clients/clients.component';
import { PeriodicElement } from '../../views/products/products.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TableComponent implements AfterViewInit {
  @Input() displayedColumns!: string[];
  @Input() dataSource!: MatTableDataSource<CustomerElement | PeriodicElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}