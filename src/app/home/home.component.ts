import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FlatDetail } from '../flat-detail';
import { CityList } from '../city-list';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AssociationService } from '../../services/association.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  req_name:any;
  req_email:any;
  reqMobnumber:any;
  reqcity:any;
  locality:any;
  phasing:any;
  Parking:any;
  Furnishing:any;
  space:any;
  bed:any;
  items = [];
  pageOfItems: Array<any>;
  pageOfItemsLength:Boolean;
  order: string = 'appId';
  modalRef: BsModalRef;
  flatDetailList: FlatDetail[];
  cityList: CityList[];
  cid:any;
  slide1: any;
  slide2: any;
  selectedCountry = 0;
  selectedState = 0;
  states = [];
  cities = [];
  cityname:string;
  appId:any;
  appName:any;
  appImgCount:any;

  constructor(private modalService: BsModalService,
    private associationservice:AssociationService, 
    private homeService:HomeService) {
    this.reqMobnumber= "";
    this.req_name= "";
    this.req_email= "";
    this.reqcity= "";
    this.locality= "";
    this.phasing= "";
    this.Parking= "";
    this.Furnishing= "";
    this.space= "";
    this.bed= "";
    this.slide1 = 5;
    this.slide2 = 10;
    this.cid="";
    this.cityname='';
    this.pageOfItemsLength=false;

  }
  sortbyLocality(cityname){
    this.pageOfItemsLength=false;
    //console.log(cityname);
    this.pageOfItems = this.flatDetailList.filter(item => {
      return item['address'] == cityname;   
    });
    if(this.pageOfItems.length==0){
      this.pageOfItemsLength=true;
    }
    // console.log(this.pageOfItemsLength);
    //console.log(this.pageOfItemsLength);
  }
  ngOnInit() {
    this.getCity();
    this.flatDetailList=this.associationservice.getFlatdetails();
    console.log(this.flatDetailList);
  }
  
  requestCall(){
    let reqAppDetails=
      {
        "Name":this.req_name,
        "MobileNumber": this.reqMobnumber,
        "EmailID":this.req_email,
        "City": this.reqcity,
        "Locality": this.locality,
        "PropertyType": this.space,
        "PriceFrom": this.slide1,
        "PriceTo": this.slide2,
        "BuiltUpAreaFrom": this.reqMobnumber,
        "BuiltUpAreaTo" : this.reqMobnumber,
        "FacingType": this.phasing,
        "ParkingType": this.Parking,
        "FurnishingType": this.Furnishing,
        "BedRoomType": this.bed
        }
    
   //console.log(reqAppDetails);
   this.homeService.requestCall(reqAppDetails)
    // console.log(this.req_name);
    // console.log(this.req_email);
    // console.log(this.reqcity);
    // console.log(this.locality);
    // console.log(this.phasing);
    // console.log(this.Parking);
    // console.log(this.Furnishing);
    // console.log(this.slide1);
    // console.log(this.slide2);
    // console.log(this.space);
    // console.log(this.bed);
  }
  
getproptype(space){
  this.space=space;
}
getbedroomtype(bed){
  this.bed=bed;
}
   
  onSelectCountry(country_id: number) {
  this.selectedCountry = country_id;
  this.selectedState = 0;
  this.cities = [];
  this.states = this.getCity().filter((item) => {
  return item.country_id === Number(country_id)
  });
  }
   
  onSelectState(state_id: number) {
  this.selectedState = state_id;
  this.cities = this.getLocality().filter((item) => {
  return item.state_id === Number(state_id)
  });
  }
   
  getCountries() {
  return [
  { id: 1, name: 'Home For Rent' }
  // { id: 2, name: 'Home For Lease' }
  // { id: 3, name: 'Country3' }
  ];
  }
   
  getCity() {
  return [
  { id: 1, country_id: 1, name: 'Bangalore' }
  // { id: 2, country_id: 1, name: 'Bangalore' },
  // { id: 3, country_id: 1, name: 'Bangalore' },
  // { id: 4, country_id: 2, name: 'City2 of HFL' },
  // { id: 5, country_id: 2, name: 'City2 of HFL' },
  // { id: 6, country_id: 2, name: 'City2 of HFL' },
  ]
  }
   
  getLocality() {
    return [
    { id: 1, state_id: 1, name: 'Jp Nagar 7th Phase' },
    { id: 2, state_id: 1, name: 'Jp Nagar 8th Phase' },
    { id: 3, state_id: 1, name: 'Manyatha' },
    { id: 4, state_id: 1, name: 'Arekere' },
    { id: 5, state_id: 1, name: 'Electronic City Phase1' },
    { id: 6, state_id: 1, name: 'Haralur' },
    { id: 7, state_id: 1, name: 'Bilekahalli' },
    { id: 8, state_id: 1, name: 'Kanakpura Road' },
    { id: 9, state_id: 1, name: 'White Field' },
    { id: 10, state_id: 1, name: 'Hosa Road' },
    { id: 11, state_id: 1, name: 'Jp Nagar 5th Phase' },
    { id: 12, state_id: 1, name: 'Frazer town, Nethaji road' },
    { id: 13, state_id: 1, name: 'sa Road' }
    ]
    }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  openModal2(contact: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contact, { class: 'modal-sm' });
  }
  openModal1(gallery: TemplateRef<any>,appId,appName) {
    this.modalRef = this.modalService.show(gallery, { class: 'modal-lg' });
    console.log(appId);
    console.log(appName);
    this.appId=appId;
    this.appName=appName;
  }

  getVals() {
    // Get slider values
    // let parent = this.parentNode;
    //let slides = parent.getElementsByTagName("input");
    // let slide1 = parseFloat( slides[0].value );
    // let slide2 = parseFloat( slides[1].value );

    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
      let sliders = sliderSections[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        this.slide1 = parseFloat(sliders[0].value);
        this.slide2 = parseFloat(sliders[1].value);
        if (this.slide1 > this.slide2) { let tmp = this.slide2; this.slide2 = this.slide1; this.slide1 = tmp; }

        let displayElement1 = document.getElementsByClassName("rangeValues")[0];
        let displayElement2 = document.getElementsByClassName("rangeValues1")[0];
        displayElement1.innerHTML = this.slide1.toString();
        displayElement2.innerHTML = this.slide2.toString();
      }
    }

    // Neither slider will clip the other, so make sure we determine which is larger

  }
  ngAfterViewInit() {
    let sliderSections2 = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections2.length; x++) {
      let sliders = sliderSections2[x].getElementsByTagName("input");
      for (let y = 0; y < sliders.length; y++) {
        this.slide1 = parseFloat(sliders[0].value);
        this.slide2 = parseFloat(sliders[1].value);
        if (this.slide1 > this.slide2) { let tmp = this.slide2; this.slide2 = this.slide1; this.slide1 = tmp; }

        let displayElement3 = document.getElementsByClassName("rangeValues")[0];
        let displayElement4 = document.getElementsByClassName("rangeValues1")[0];
        displayElement3.innerHTML = this.slide1.toString();
        displayElement4.innerHTML = this.slide2.toString();
      }
    }
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }
  receiveApproomName(abc){
      console.log(abc);
  }

  loadLocality(cid){
      console.log(cid);
  }
}
