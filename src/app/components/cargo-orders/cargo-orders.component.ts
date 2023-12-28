import { Component } from '@angular/core';
import { order } from '../../models/order';
import { OrderService } from '../../services/orders.service';

@Component({
  selector: 'cargo-orders',
  templateUrl: './cargo-orders.component.html',
  styleUrl: './cargo-orders.component.css',
  providers: [
    OrderService
  ]
})

export class CargoOrdersComponent {

  public orders:order[] = [];

  constructor(
    private _orderService: OrderService
  ){}

  ngOnInit(){
    this.getOrders()
  }

  getOrders(){
    this._orderService.getOrders().subscribe(
      response => {
        if(response.status = 200){
          this.orders = response.result;
          console.table(this.orders)
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
