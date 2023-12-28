import { ModuleWithProviders} from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';
import { CargoDetailsComponent } from './components/cargo-details/cargo-details.component';

const routes: Routes = [
  { path: '', component: CargoOrdersComponent, title: 'Cargo Orders' }, // defined a title prop
  { path: 'cargos/:id', component: CargoDetailsComponent, title: 'Detail'},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes)
