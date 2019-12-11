import { Component, OnInit, TemplateRef} from '@angular/core';
import { FlatDetail } from '../flat-detail';
import { AssociationService } from '../../services/association.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})

export class ViewdetailsComponent implements OnInit {
  filteredList: any;
  items = [];
  pageOfItems: Array<any>;
  modalRef: BsModalRef;
  flatDetailList: FlatDetail[];
  filteredListAddress:any;
  flatDetailListresult: FlatDetail[];
  slide1: any;
  slide2: any;
  selectedCountry = 0;
  selectedState = 0;
  states = [];
  cities = [];
  pageOfItemsLength:Boolean;
  pageCount:any;
  cityname:string;
  appId:any;
  appName:any;
  initialPageCount:any;
  selectOpt1:string;
  selectOpt2:string;
  selectOpt3:string;
  contact_name: any;
  contact_email: any;
  contact_Mobnumber: any;


  constructor(private modalService: BsModalService,private associationservice:AssociationService,private homeService: HomeService) { 
    this.cityname='';
    this.initialPageCount=5;
    this.pageCount=0;
    this.pageOfItemsLength=false;
    this.flatDetailListresult=[];
    this.slide1=5;
    this.slide2=50;
    this.selectOpt1="Select Home Type";
    this.selectOpt2="Select City";
    this.selectOpt3="Select Locality";
  }

  ngOnInit() {
    //this.getFlatdetails();
    this.flatDetailList=this.associationservice.getFlatdetails();
    this.flatDetailListresult=  this.flatDetailList;
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  
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
  openModal1(gallery: TemplateRef<any>,appId,appName) {
    this.modalRef = this.modalService.show(gallery, { class: 'modal-lg' });
    console.log(appId);
    console.log(appName);
    this.appId=appId;
    this.appName=appName;
    // let slicednames=img.split("/");
    // console.log(slicednames[slicednames.length-1]);
    // let appRoomName=slicednames[slicednames.length-1].split(".");
    // console.log(appRoomName);
    // this.appRootName=appRoomName[0];
    // //this.sendAppName.emit(this.appRootName);
    // this.associationservice.AppRoomName=this.appRootName;
    
  }

  openModal2(viewdetails: TemplateRef<any>, appId) {
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
  openModal3(contact: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contact, { class: 'modal-sm' });
  } 
onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    console.log(this.pageOfItems);
}

onSelectCountry(country_id: number,countryname) {
  this.selectedCountry = country_id;
  this.selectedState = 0;
  this.cities = [];
  this.states = this.getCity().filter((item) => {
  return item.country_id === Number(country_id)
  });
  this.selectOpt1=countryname;
 }
   

onSelectState(state_id: number,statename) {
  this.selectedState = state_id;
  this.cities = this.getLocality().filter((item) => {
  return item.state_id === Number(state_id)
  });
  this.selectOpt2=statename;
  }

sortbyLocality(cityname){
    this.flatDetailList =this.flatDetailListresult;
    this.pageOfItemsLength=false;
    //console.log(cityname);
    this.flatDetailList = this.flatDetailList.filter(item => {
      return item['address'] == cityname;   
    });
console.log(this.pageOfItems);
this.pageOfItems=this.flatDetailList;
    if(this.pageOfItems.length==0){
      this.pageOfItemsLength=true;
    }
    this.pageCount=this.pageOfItems.length;
   this.initialPageCount=this.pageOfItems.length;
    console.log(this.pageCount);
    //console.log(this.pageOfItemsLength);
    this.selectOpt3=cityname;
  } 

getCountries() {
    return [
    { id: 1, name: 'Home For Rent' },
    // { id: 2, name: 'Home For Lease' }
    // { id: 3, name: 'Country3' }
    ];
  }
   
  getCity() {
  return [
  { id: 1, country_id: 1, name: 'Bangalore' },
  // { id: 2, country_id: 1, name: 'City1 of HFR' },
  // { id: 3, country_id: 1, name: 'City1 of HFR' },
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
  // ngAfterViewInit() {
  //   let sliderSections2 = document.getElementsByClassName("range-slider");
  //   for (let x = 0; x < sliderSections2.length; x++) {
  //     let sliders = sliderSections2[x].getElementsByTagName("input");
  //     for (let y = 0; y < sliders.length; y++) {
  //       this.slide1 = parseFloat(sliders[0].value);
  //       this.slide2 = parseFloat(sliders[1].value);
  //       if (this.slide1 > this.slide2) { let tmp = this.slide2; this.slide2 = this.slide1; this.slide1 = tmp; }

  //       let displayElement3 = document.getElementsByClassName("rangeValues")[0];
  //       let displayElement4 = document.getElementsByClassName("rangeValues1")[0];
  //       displayElement3.innerHTML = this.slide1.toString();
  //       displayElement4.innerHTML = this.slide2.toString();
  //     }
  //   }
  // }
}
