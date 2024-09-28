import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { TitleComponent } from '../../components/title/title.component';
import { TableComponent } from '../../components/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [SearchComponent, TitleComponent, TableComponent],
})
export class ProductsComponent implements OnInit {
  pageTitle: string = 'Buscar productos';
  buttonTitle: string = 'Nuevo producto';

  clientSearchPlaceholder: string = 'Nombre del producto';
  clientSearchLabel: string = 'Producto';
  buttonTitleSearch: string = 'Buscar';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<ProductElement>([]);

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  async loadProducts() {
    this.productsService.searchAllProducts().subscribe(
      (products) => {
        this.dataSource.data = products as ProductElement[];
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

}

export interface ProductElement {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
}
