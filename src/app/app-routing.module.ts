import { ModuleWithProviders} from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';
import { CargoDetailsComponent } from './components/cargo-details/cargo-details.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' }, // defined a title prop
  { path: 'orders', component: CargoOrdersComponent, title: 'Cargo Orders' }, // defined a title prop
  { path: 'orders/:id', component: CargoDetailsComponent, title: 'Detail'},
  { path: '**', component: ErrorComponent, title: '404 Not Found'},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes)
