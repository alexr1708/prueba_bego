import { destination } from "./destination";

export class order{
    constructor(
        public _id: string,
        public status: number,
        public order_number: string,
        public manager: string,
        public driver: string,
        public version: string,
        public type: string,
        public destinations: destination[],
        public start_date: number,
        public end_date: number,
        public is_today: boolean,
        public status_string: string,
        public status_class: string,
        public driver_thumbnail: any
    ){}
}