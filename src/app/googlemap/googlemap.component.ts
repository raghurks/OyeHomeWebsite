import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { FlatDetail } from '../flat-detail';
import { AssociationService } from '../../services/association.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})

export class GooglemapComponent implements OnInit {
  location: object;
  flatDetailList: FlatDetail[];
  lat: any;
  lng: any;
  show: boolean;
  name: any;

  // longitude:any;
  // latitude:any;
  // markers:any;

  constructor(private map: MapService, private associationservice: AssociationService) {
    // this.longitude="";
    // this.latitude="";
  }

  ngOnInit() {
    this.getUserLocation();
    //this.getDirection();
  }
  onMouseOut(infoWindow, gm) {
    infoWindow.close();
  }
  onMouseOver(infoWindow, gm) {
    console.log(gm);
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(options => {
        console.log(options);
        this.lat = options.coords.latitude;
        this.lng = options.coords.longitude;
        this.lng = options.coords.longitude;

        //this.name= position.coords.heading;
        console.log(this.lat);
        console.log(this.lng);

        //console.log(this.name);
        let markerList = this.associationservice.getFlatdetails();
        markerList.forEach(item => {
          let itemforinsert = {
            appLongitude: item['appLongitude'],
            appLatitude: item['appLatitude'],
            appName: item['appName'],
            markerUrl: item['markerUrl'],
            mapAdress: item['address']
          }
          this.map.cords.push(itemforinsert);
        })
        console.log(this.map.cords);
        //  console.log(this.map.cords[0]['appLatitude']); 
        //   console.log(this.map.cords);
        let currentloc = {
          appLongitude: `${this.lng}`, appLatitude: `${this.lat}`, appName: "Your Current Location", markerUrl: "../assets/images/map_placeholder1.png", mapAdress: "aadress"

        }

        this.map.cords.push(currentloc);
        console.log(this.map.cords);
        this.map.curLocLat = options.coords.latitude;
        this.map.curLocLng = options.coords.longitude;
        // console.log(this.map.cords);
        // console.log(this.map.locations());
      });
      
    }
  }
}
