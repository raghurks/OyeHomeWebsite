import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FlatDetail } from '../flat-detail';
import { CityList } from '../city-list';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AssociationService } from '../../services/association.service';
import { HomeService } from '../../services/home.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  req_name: any;
  req_email: any;
  reqMobnumber: any;
  reqcity: any;
  locality: any;
  phasing: any;
  Parking: any;
  Furnishing: any;
  space: any;
  bed: any;
  contact_name: any;
  contact_email: any;
  contact_Mobnumber: any;
  filteredList: any;
  filteredListAddress: any;
  items = [];
  pageOfItems: Array<any>;
  pageOfItemsLength: Boolean;
  order: string = 'appId';
  modalRef: BsModalRef;
  flatDetailList: FlatDetail[];
  getlocltln: any;
  cityList: CityList[];
  cid: any;
  slide1: any;
  slide2: any;
  selectedCountry = 0;
  selectedState = 0;
  states = [];
  cities = [];
  cityname: string;
  appId: any;
  appName: any;
  appImgCount: any;
  selectOpt1: string;
  selectOpt2: string;
  selectOpt3: string;
  longitude: any;
  latitude: any;
  name: any;
  markerUrl: any;
  mapAddress: any;

constructor(private modalService: BsModalService,
    private associationservice: AssociationService,
    private homeService: HomeService, private maps: MapService) {
    this.longitude = "";
    this.latitude = "";
    this.reqMobnumber = "";
    this.req_name = "";
    this.req_email = "";
    this.filteredList = "";
    this.reqcity = "";
    this.locality = "";
    this.phasing = "";
    this.Parking = "";
    this.Furnishing = "";
    this.space = "";
    this.bed = "";
    this.contact_name = "",
    this.contact_email = "",
    this.contact_Mobnumber = "",
    this.slide1 = 5;
    this.slide2 = 10;
    this.filteredListAddress = "";
    this.cid = "";
    this.cityname = '';
    this.pageOfItemsLength = false;
    this.selectOpt1 = "Select Home Type";
    this.selectOpt2 = "Select City";
    this.selectOpt3 = "Select Locality";
    this.name = "";
    this.markerUrl = "";
    this.mapAddress = "";

  }

  ngOnInit() {
    this.getCity();
    this.flatDetailList = this.associationservice.getFlatdetails();
    console.log(this.flatDetailList);

  }

  requestCall() {
    let reqAppDetails =
    {
      "Name": this.req_name,
      "MobileNumber": '+91' + this.reqMobnumber,
      "EmailID": this.req_email,
      "City": this.reqcity,
      "Locality": this.locality,
      "PropertyType": this.space,
      "PriceFrom": this.slide1,
      "PriceTo": this.slide2,
      "BuiltUpAreaFrom": this.reqMobnumber,
      "BuiltUpAreaTo": this.reqMobnumber,
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
  sendContactDetails() {
    let contactDetails =
    {
      "Name": this.contact_name,
      "Email": this.contact_email,
      "MobileNumber": "+91" + this.contact_Mobnumber,
      "Country": "+91"
    }
    console.log(contactDetails);
    this.homeService.sendContactDetails(contactDetails)

  }
  getproptype(space) {
    this.space = space;
  }
  getbedroomtype(bed) {
    this.bed = bed;
  }

  onSelectCountry(country_id: number, countryname) {
    //console.log(country_id);
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getCity().filter((item) => {
      return item.country_id === Number(country_id)
    });
    this.selectOpt1 = countryname;
  }

  onSelectState(state_id: number, statename) {
    this.selectedState = state_id;
    this.cities = this.getLocality().filter((item) => {
      return item.state_id === Number(state_id)
    });
    this.selectOpt2 = statename;
  }

  sortbyLocality(cityname) {
    this.pageOfItemsLength = false;
    // console.log(cityid);
    this.pageOfItems = this.flatDetailList.filter(item => {
      return item['address'] == cityname;
    });
    if (this.pageOfItems.length == 0) {
      this.pageOfItemsLength = true;
    }
    this.selectOpt3 = cityname;
    // console.log(this.pageOfItemsLength);
    //console.log(this.pageOfItemsLength);
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
      { id: 1, state_id: 1, name: 'Jp Nagar 7th Phase', lat: '12.917000', lng: '77.581886' },
      { id: 2, state_id: 1, name: 'Jp Nagar 8th Phase', lat: '12.910930', lng: '77.590042' },
      { id: 3, state_id: 1, name: 'Manyatha', lat: '13.046500', lng: '77.619926' },
      { id: 4, state_id: 1, name: 'Arekere', lat: '12.900970', lng: '75.774727' },
      { id: 5, state_id: 1, name: 'Electronic City Phase1', lat: '28.481390', lng: '77.095170' },
      { id: 6, state_id: 1, name: 'Haralur', lat: '13.246840', lng: '77.164879' },
      { id: 7, state_id: 1, name: 'Bilekahalli', lat: '12.895940', lng: '77.608620' },
      { id: 8, state_id: 1, name: 'Kanakpura Road', lat: '12.893960', lng: '77.565048' },
      { id: 9, state_id: 1, name: 'White Field', lat: '12.972040', lng: '77.768593' },
      { id: 10, state_id: 1, name: 'Hosa Road', lat: '12.870200', lng: '77.653481' },
      { id: 11, state_id: 1, name: 'Jp Nagar 5th Phase', lat: '12.912420', lng: '77.591072' },
      { id: 12, state_id: 1, name: 'Frazer town, Nethaji road', lat: '13.001560', lng: '77.612180' }
    ]
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  openModal2(contact: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contact, { class: 'modal-sm' });
  }
  openModal1(gallery: TemplateRef<any>, appId, appName) {
    this.modalRef = this.modalService.show(gallery, { class: 'modal-lg' });
    console.log(appId);
    console.log(appName);
    this.appId = appId;
    this.appName = appName;
  }
  openModal3(viewdetails: TemplateRef<any>, appId) {
    console.log(appId);
    this.filteredList = this.flatDetailList.filter(data => {
      return data['appId'] == appId;
    })
    // console.log(this.filteredList);
    // console.log(this.filteredList[0].price);
    // console.log(this.filteredList[0]['address']);
    this.filteredListAddress = this.filteredList[0]['address'];
    this.modalRef = this.modalService.show(viewdetails, { class: 'modal-lg' });
  }
  getVals() {
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
  receiveApproomName(abc) {
    console.log(abc);
  }

  loadLocality(cid) {
    console.log(cid);
  }


  sortbylatlng(locname, cityid: number) {
    //console.log(locname);
    //console.log(cityid);

    this.selectOpt3 = locname;
    this.getlocltln = this.flatDetailList.filter(item => {
      return item['address'] == locname;
    });
    console.log(this.getlocltln);
    this.latitude = this.getlocltln[0]['appLatitude'];
    this.longitude = this.getlocltln[0]['appLongitude'];
    this.name = this.getlocltln[0]['appName'];
    this.markerUrl = this.getlocltln[0]['markerUrl'];
    this.mapAddress = this.getlocltln[0]['address'];
    console.log(this.mapAddress);
    //console.log(this.longitude)

    let cord = {
      longitude: this.longitude, latitude: this.latitude, name: this.name, url: this.markerUrl, mapAdress: this.mapAddress
    }
    this.maps.cords.push(cord);
    //console.log(this.maps.cords);
    //console.log(this.longitude);
    //google maps zoom

    this.maps.dir = {
      origin: { lat: this.maps.curLocLat, lng: this.maps.curLocLng },
      destination: { lat: Number(this.latitude), lng: Number(this.longitude) }
    }
    console.log(this.maps.dir);
    const mexicoCity = new google.maps.LatLng(this.maps.curLocLat, this.maps.curLocLng);
    const jacksonville = new google.maps.LatLng(Number(this.latitude), Number(this.longitude));
    const distance = google.maps.geometry.spherical.computeDistanceBetween(mexicoCity, jacksonville);
    console.log(distance / 1000);
    this.maps.distance = (distance / 1000).toFixed(2);
  }

}
