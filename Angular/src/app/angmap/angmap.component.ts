import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-angmap',
  templateUrl: './angmap.component.html',
  styleUrls: ['./angmap.component.css']
})
export class AngmapComponent implements AfterViewInit {

  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 12.9891413;
  lng = 80.2295445;
  //markers code
  markers = [
    {
      position: new google.maps.LatLng(12.9891413, 73.935242),
      map: this.map,
      title: "Water 1"
    },

    {
      position: new google.maps.LatLng(11.9891413, 75.935242),
      map: this.map,
      title: "Water 2"
    },

    {
      position: new google.maps.LatLng(11.98432, 79.42522),
      map: this.map,
      title: "TEMP 1"
    },
    {
      position: new google.maps.LatLng(11.94643, 79.34255),
      map: this.map,
      title: "Temp 2"
    }

  ];

  //Coordinates to set the center of the map
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 50
  };

  //Default Marker
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "RISE"
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer(): void {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

}

