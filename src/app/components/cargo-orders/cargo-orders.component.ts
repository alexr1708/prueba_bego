import { Component, signal} from '@angular/core';
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
  public get_orders:order[] = [];
  public time_left: string="";
  searchQuery = signal<string>('');

  constructor(
    private _orderService: OrderService
  ){}

  ngOnInit(){
    this.getOrders();
  }

  // obtiene las ordenes del servicio de la api
  getOrders(){
    this._orderService.getOrders().subscribe(
      response => {
        if(response.status = 200){
          this.get_orders = response.result;
          this.orders = this.get_orders;
          console.log(this.orders)
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  // obtiene la fecha de la orden
  getDate(date:number){
    let date_get = new Date(date);
    let date_format = date_get.getDate()+"/"+date_get.getMonth()+"/"+date_get.getFullYear()
    return date_format;
  }
  
  // obtiene las hora de la orden
  getHour(date:number){
    let hour_get = new Date(date);
    let hour_format = hour_get.getHours()+":"+hour_get.getMinutes();
    return hour_format;
  }

  // obtiene el tiempo restante para la recoleccion
  getTime(date:number){
    let hour_get = new Date(date);
    
    let current_time = new Date();

    let time = hour_get.getTime()-current_time.getTime();

    if(time>0){
      let left_time = new Date(time)
      this.time_left = left_time.getHours()+":"+left_time.getMinutes()+":"+left_time.getSeconds();
      setTimeout(this.getTime, 1000)
      return true;
    }
    return false;

  }

  // console.log para el botón de navegación
  getRouteTracking(){
    console.log("Navegación")
  }

  // funcion de busqueda
  search(text:string){
    let orders_filter:order[] = this.get_orders;

    if(text===''){
      this.orders = orders_filter;
      return;
    }

    orders_filter = this.get_orders.filter((element)=>{
      return element._id.includes(text);
    })
    this.orders = orders_filter;
  }
}
