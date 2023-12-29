import { destination } from "./destination";
import { driver } from "./driver";
import { status_list } from "./status_list";

export class order_details{
    constructor(
        public _id: string,
        public status: number,
        public order_number: string,
        public driver: driver,
        public version: string,
        public start_date: number,
        public end_date: number,
        public status_list: status_list,
        public destinations: destination[]
    ){}
}