export class destination{
    constructor(
        public address: string,
        public start_date: number,
        public end_date: number,
        public nickname: string,
        public show_navigation: boolean,
        public startDate?: number,
        public endDate?: number,
        public lat?: number,
        public lng?: number,
        public zip_code?: string,
        public place_id_dropoff?: string,
        public status?: number,
        public status_string?: string,
        public status_class?: string,
    ){}
}