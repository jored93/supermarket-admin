import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './views/clients/clients.component';
import { ProductsComponent } from './views/products/products.component';
import { BillComponent } from './views/bill/bill.component';
import { SellersComponent } from './views/sellers/sellers.component';

export const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'bill', component: BillComponent },
    { path: 'sellers', component: SellersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }