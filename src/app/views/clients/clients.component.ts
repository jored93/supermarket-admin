import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchComponent } from '../../components/search/search.component';
import { TitleComponent } from '../../components/title/title.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  standalone: true,
  imports: [SearchComponent, TitleComponent, TableComponent],
})
export class ClientsComponent implements OnInit {
  pageTitle: string = 'Buscar clientes';
  buttonTitle: string = 'Nuevo cliente';

  clientSearchPlaceholder: string = 'Nombre del cliente';
  clientSearchLabel: string = 'Cliente';
  buttonTitleSearch: string = 'Buscar';

  displayedColumns: string[] = ['identification', 'fullName', 'email'];
  dataSource = new MatTableDataSource<CustomerElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}
}

export interface CustomerElement {
  fullName: string;
  identification: string;
  email: string;
}

const ELEMENT_DATA: CustomerElement[] = [
  {identification: '1', fullName: 'Hydrogen', email: 'H'},
  {identification: '2', fullName: 'Helium', email: 'He'},
  {identification: '3', fullName: 'Lithium', email: 'Li'},
  {identification: '4', fullName: 'Beryllium', email: 'Be'},
  {identification: '5', fullName: 'Boron', email: 'B'},
  {identification: '6', fullName: 'Carbon', email: 'C'},
  {identification: '7', fullName: 'Nitrogen', email: 'N'},
  {identification: '8', fullName: 'Oxygen', email: 'O'},
  {identification: '9', fullName: 'Fluorine', email: 'F'},
  {identification: '10', fullName: 'Neon', email: 'Ne'},
  {identification: '11', fullName: 'Sodium', email: 'Na'},
  {identification: '12', fullName: 'Magnesium', email: 'Mg'},
  {identification: '13', fullName: 'Aluminum', email: 'Al'},
  {identification: '14', fullName: 'Silicon', email: 'Si'},
  {identification: '15', fullName: 'Phosphorus', email: 'P'},
  {identification: '16', fullName: 'Sulfur', email: 'S'},
  {identification: '17', fullName: 'Chlorine', email: 'Cl'},
  {identification: '18', fullName: 'Argon', email: 'Ar'},
  {identification: '19', fullName: 'Potassium', email: 'K'},
  {identification: '20', fullName: 'Calcium', email: 'Ca'},
];