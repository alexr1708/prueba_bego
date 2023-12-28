import { Injectable } from "@angular/core";
import { Observable, } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { order } from "../models/order";
import { global } from "./global";

@Injectable()
export class OrderService{
    public url:string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url_1;
    }

    getOrders():Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url, {headers: headers})
    }
}