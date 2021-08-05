import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  center: any;
  markers: Array<any> = [];


  constructor() {
  }

  ngOnInit(): void {
    this.addMarker();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 6.673541437333112,
        lng: 80.12315561112388,
      }
    })
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: 6.673541437333112,
        lng: 80.12315561112388,
      },
      label: {},
      title: 'Marker title ' + (this.markers.length + 1),
      options: {animation: google.maps.Animation.DROP},
    })
  }
}
