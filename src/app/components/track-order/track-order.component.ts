import { Component, Input } from '@angular/core';
import { status_list } from '../../models/status_list';

@Component({
  selector: 'track-order',
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css'
})
export class TrackOrderComponent {
  @Input() status:status_list = {pickup:[], dropoff:[]};
}
