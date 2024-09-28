import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchComponent } from '../../components/search/search.component';
import { TitleComponent } from '../../components/title/title.component';
import { TableComponent } from '../../components/table/table.component';
import { CustomerService } from '../../core/services/customers/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../../components/formModal/formModal.component';

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
  dataSource = new MatTableDataSource<CustomerElement>([]);

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '400px',
      data: {
        fields: [
          { label: 'Identificación', type: 'text', placeholder: 'Ingresa tu cedula' },
          { label: 'Nombre', type: 'text', placeholder: 'Ingresa tu nombre' },
          { label: 'Apellido', type: 'text', placeholder: 'Ingresa tu apellido' },
          { label: 'Correo', type: 'email', placeholder: 'Ingresa tu correo' }
        ],
      },
    });

    // Obtener el resultado del formulario y pasarlo a la función btnActionSubmit
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.btnActionSubmit(result);  // Pasar los valores del formulario
      }
    });
  }

  ngOnInit() {
    this.loadCustomers();
  }

  async loadCustomers () {
    this.customerService.searchAllCustomers().subscribe(
      (customers: any) => {
        console.log('customers: ', customers);
        this.dataSource.data = customers as CustomerElement[];
      },
      (error) => {
        console.error('Error al cargar clientes:', error);
      }
    );
  }

  async btnActionSubmit(formData: any) {
    console.log('Botón de acción submit con datos del formulario:', formData);
    const newUser = {
      name: formData.Nombre,
      lastName: formData.Apellido,
      identification: formData.Identificación,
      email: formData.Correo,
    }

    this.customerService.createCustomer(newUser).subscribe(
      (_customer) => { 
        this.loadCustomers()
      },
      (error) => {
        console.error('Error al cargar clientes:', error);
      }
    );

  }
}

export interface CustomerElement {
  fullName: string;
  identification: string;
  email: string;
}
