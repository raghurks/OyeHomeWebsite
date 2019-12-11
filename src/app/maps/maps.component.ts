import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { MapService } from '../map.service';
import * as M from '../../assets/materialize/js/materialize.min.js';
import * as $ from 'jquery';
import { AssociationService } from '../../services/association.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  carouselImages:any[];
  location:object;
  lat: number;
  lng: number;
  options:{};
  imgPath:any;
  appRootName:string;
  @Input() appId:any;
  @Input() appName:any;
  @Output() sendAppName= new EventEmitter();
  // @Output() sendappImgCount= new EventEmitter<any>();

  constructor(private map:MapService,private associationservice:AssociationService){
  this.lat=0;
  this.lng=0;
  this.carouselImages=[];
  this.imgPath='';
  }
  
  ngOnInit()
  {
    console.log("from maps"+ this.appId);
    this.carouselImages=this.associationservice.getFlatdetails();
    console.log(this.carouselImages);
    // console.log(this.carouselImages[0]['appImage'][0]);
    this.carouselImages=this.carouselImages.filter(img=> {
      return img['appId'] == this.appId;
    });
    
    console.log(this.carouselImages[0]['appImage'][0]);
    let slicednames=this.carouselImages[0]['appImage'][0].split("/");
    console.log(slicednames[slicednames.length-1]);
    let appRoomName=slicednames[slicednames.length-1].split(".");
    console.log(appRoomName);
    this.appRootName=appRoomName[0];
    // this.sendAppName.emit(this.appRootName);
    this.associationservice.AppRoomName=this.appRootName;
    this.imgPath=this.carouselImages[0]['appImage'][0];
    console.log(this.carouselImages[0]['appImage'].length);
    this.map.appImgCount=this.carouselImages[0]['appImage'].length;
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);
      });
    }
  }

  ngAfterViewInit(){
    var elems = document.querySelectorAll('.carousel');
    console.log(elems);
    var instances = M.Carousel.init(elems, this.options);
    console.log(instances);
  }

  getCarouselName(img,event){
    // event.stopPropagation();
    console.log(img);
    let slicednames=img.split("/");
    console.log(slicednames[slicednames.length-1]);
    let appRoomName=slicednames[slicednames.length-1].split(".");
    console.log(appRoomName);
    this.appRootName=appRoomName[0];
    // this.sendAppName.emit(this.appRootName);
    this.associationservice.AppRoomName=this.appRootName;
  }

}
