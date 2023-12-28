import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';
import { CargoDetailsComponent } from './components/cargo-details/cargo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CargoOrdersComponent,
    CargoDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
