import { ModuleWithProviders} from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: CargoOrdersComponent, title: 'Cargo Orders' },
  { path: 'orders/:id', component: OrderDetailsComponent, title: 'Order Details' },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes)
