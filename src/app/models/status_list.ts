import { status_road } from "./status_road";

export class status_list{
    constructor(
        public pickup: status_road[],
        public dropoff: status_road[],
    ){}
}