import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CargoOrdersComponent } from './components/cargo-orders/cargo-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TrackOrderComponent } from './components/track-order/track-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CargoOrdersComponent,
    OrderDetailsComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    CdkAccordionModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
