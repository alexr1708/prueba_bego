import { ModuleWithProviders} from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';

const routes: Routes = [
  { path: '', component: CargoOrdersComponent, title: 'Cargo Orders' },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes)
