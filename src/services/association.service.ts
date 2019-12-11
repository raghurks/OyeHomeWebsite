import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  flatDetailList: any[];
  AppRoomName: string;

  constructor() {
    this.AppRoomName = '';
    this.flatDetailList = [];
  }

  getFlatdetails() {
    return this.flatDetailList = [{
      appId: 1, price: "30,000", rentType: "For Rent", address: "Jp Nagar 7th Phase", appName: "Aishwarya Apartment", appLatitude: "12.9089708", appLongitude: "77.573461", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image1.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image2.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image3.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image4.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image5.jpg"
      ]
    },
    {
      appId: 2, price: "45,000", rentType: "For Rent", address: "Jp Nagar 8th Phase", appName: "Arya Hamsa Grande", appLatitude: "12.8599997", appLongitude: "77.5723308", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/AryaHamsaGrande_JPNagar8thPhase/image1.jpg",
        "../assets/images/appartments/AryaHamsaGrande_JPNagar8thPhase/image2.jpg",
        "../assets/images/appartments/AryaHamsaGrande_JPNagar8thPhase/image3.jpg",
        "../assets/images/appartments/AryaHamsaGrande_JPNagar8thPhase/image4.jpg",
        "../assets/images/appartments/AryaHamsaGrande_JPNagar8thPhase/image5.jpg"
      ]
    },
    {
      appId: 3, price: "40,000", rentType: "For Rent", address: "Manyatha", appName: "Icon Apartments", appLatitude: "13.0491853", appLongitude: "77.6230323", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/ICONApartments_Manyatha/image1.jpg",
        "../assets/images/appartments/ICONApartments_Manyatha/image2.jpg",
        "../assets/images/appartments/ICONApartments_Manyatha/image3.jpg",
        "../assets/images/appartments/ICONApartments_Manyatha/image4.jpg",
        "../assets/images/appartments/ICONApartments_Manyatha/image5.jpg"
      ]
    },
    {
      appId: 4, price: "32,000", rentType: "For Rent", address: "Jp Nagar 7th Phase", appName: "Independent House", appLatitude: "12.8943925", appLongitude: "77.5605499", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/IndependentHouse_JPNagar7thPhase/image1.jpg",
        "../assets/images/appartments/IndependentHouse_JPNagar7thPhase/image2.jpg",
        "../assets/images/appartments/IndependentHouse_JPNagar7thPhase/image3.jpg",
        "../assets/images/appartments/IndependentHouse_JPNagar7thPhase/image4.jpg",
        "../assets/images/appartments/IndependentHouse_JPNagar7thPhase/image5.jpg"
      ]
    },
    {
      appId: 5, price: "19,000", rentType: "For Rent", address: "Arekere", appName: "Mahaveer Gracier", appLatitude: "12.8888725", appLongitude: "77.6025024", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/MahaveerGracier_Arekere/image1.jpg",
        "../assets/images/appartments/MahaveerGracier_Arekere/image2.jpg",
        "../assets/images/appartments/MahaveerGracier_Arekere/image3.jpg",
        "../assets/images/appartments/MahaveerGracier_Arekere/image4.jpg",
        "../assets/images/appartments/MahaveerGracier_Arekere/image5.jpg"
      ]
    },
    {
      appId: 6, price: "40,000", rentType: "For Rent", address: "Electronic City Phase1", appName: "Mahendra Elena5", appLatitude: "12.8278057", appLongitude: "77.6535948", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/MahendraElena5_ElectronicCityPhase1/image1.jpg",
        "../assets/images/appartments/MahendraElena5_ElectronicCityPhase1/image2.jpg",
        "../assets/images/appartments/MahendraElena5_ElectronicCityPhase1/image3.jpg",
        "../assets/images/appartments/MahendraElena5_ElectronicCityPhase1/image4.jpg",
        "../assets/images/appartments/MahendraElena5_ElectronicCityPhase1/image5.jpg"
      ]
    },
    {
      appId: 7, price: "17,000", rentType: "For Rent", address: "Haralur", appName: "ND Passion", appLatitude: "12.8931054", appLongitude: "77.6554953", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/NDPassion_Haralur/image1.jpg",
        "../assets/images/appartments/NDPassion_Haralur/image2.jpg",
        "../assets/images/appartments/NDPassion_Haralur/image3.jpg",
        "../assets/images/appartments/NDPassion_Haralur/image4.jpg",
        "../assets/images/appartments/NDPassion_Haralur/image5.jpg"
      ]
    },
    {
      appId: 8, price: "24,000", rentType: "For Rent", address: "Bilekahalli", appName: "Pariwar Palace", appLatitude: "12.8897118", appLongitude: "77.6124748", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/PARIWARPALACE_Bilekahalli/image1.jpg",
        "../assets/images/appartments/PARIWARPALACE_Bilekahalli/image2.jpg",
        "../assets/images/appartments/PARIWARPALACE_Bilekahalli/image3.jpg",
        "../assets/images/appartments/PARIWARPALACE_Bilekahalli/image4.jpg",
        "../assets/images/appartments/PARIWARPALACE_Bilekahalli/image5.jpg"
      ]
    },
    {
      appId: 9, price: "45,000", rentType: "For Rent", address: "Kanakpura Road", appName: "Prestige Falcon City", appLatitude: "12.8871744", appLongitude: "77.5625315", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/PrestigeFalconCIty_KanakpuraRoad/image1.jpg",
        "../assets/images/appartments/PrestigeFalconCIty_KanakpuraRoad/image2.jpg",
        "../assets/images/appartments/PrestigeFalconCIty_KanakpuraRoad/image3.jpg",
        "../assets/images/appartments/PrestigeFalconCIty_KanakpuraRoad/image4.jpg",
        "../assets/images/appartments/PrestigeFalconCIty_KanakpuraRoad/image5.jpg"
      ]
    },
    {
      appId: 10, price: "30,000", rentType: "For Rent", address: "White Field", appName: "Prestige Lake Side Habitat", appLatitude: "12.9299576", appLongitude: "77.7379196", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/PrestigeLakeSideHabitat_WhiteField/image1.jpg",
        "../assets/images/appartments/PrestigeLakeSideHabitat_WhiteField/image2.jpg",
        "../assets/images/appartments/PrestigeLakeSideHabitat_WhiteField/image3.jpg",
        "../assets/images/appartments/PrestigeLakeSideHabitat_WhiteField/image4.jpg",
        "../assets/images/appartments/PrestigeLakeSideHabitat_WhiteField/image5.jpg"
      ]
    },
    {
      appId: 11, price: "28,000", rentType: "For Rent", address: "Electronic City Phase1", appName: "Prestige Sunrise Park", appLatitude: "12.8345426", appLongitude: "77.6615701,", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/PrestigeSunrisePark_ElectronicCityPhase1/image1.jpg",
        "../assets/images/appartments/PrestigeSunrisePark_ElectronicCityPhase1/image2.jpg",
        "../assets/images/appartments/PrestigeSunrisePark_ElectronicCityPhase1/image3.jpg",
        "../assets/images/appartments/PrestigeSunrisePark_ElectronicCityPhase1/image4.jpg",
        "../assets/images/appartments/PrestigeSunrisePark_ElectronicCityPhase1/image4.jpg"
      ]
    },
    {
      appId: 12, price: "30,000", rentType: "For Rent", address: "Electronic City Phase1", appName: "Shriram Sumit", appLatitude: "12.8360678", appLongitude: "77.6650531", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/ShriramSumit_ElectronicCityPhase1/image1.jpg",
        "../assets/images/appartments/ShriramSumit_ElectronicCityPhase1/image2.jpg",
        "../assets/images/appartments/ShriramSumit_ElectronicCityPhase1/image3.jpg",
        "../assets/images/appartments/ShriramSumit_ElectronicCityPhase1/image4.jpg",
        "../assets/images/appartments/ShriramSumit_ElectronicCityPhase1/image5.jpg"
      ]
    },
    {
      appId: 13, price: "33,000", rentType: "For Rent", address: "Hosa Road", appName: "Sobha Silicon Oasis", appLatitude: "12.867993", appLongitude: "77.6590361", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/SobhaSiliconOasis_HosaRoad/image1.jpg",
        "../assets/images/appartments/SobhaSiliconOasis_HosaRoad/image2.jpg",
        "../assets/images/appartments/SobhaSiliconOasis_HosaRoad/image3.jpg",
        "../assets/images/appartments/SobhaSiliconOasis_HosaRoad/image4.jpg",
        "../assets/images/appartments/SobhaSiliconOasis_HosaRoad/image5.jpg"
      ]
    },
    {
      appId: 14, price: "10,000", rentType: "For Rent", address: "Jp Nagar 7th Phase", appName: "Vandana Celesta", appLatitude: "12.940710", appLongitude: "77.546240", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/VandanaCelesta_JPNagar7thPhase/image1.jpg",
        "../assets/images/appartments/VandanaCelesta_JPNagar7thPhase/image2.jpg",
        "../assets/images/appartments/VandanaCelesta_JPNagar7thPhase/image3.jpg",
        "../assets/images/appartments/VandanaCelesta_JPNagar7thPhase/image4.jpg",
        "../assets/images/appartments/VandanaCelesta_JPNagar7thPhase/image5.jpg"
      ]
    },
    {
      appId: 15, price: "28,000", rentType: "For Rent", address: "Frazer town, Nethaji road", appName: "Ashoka Enclave", appLatitude: "13.0004126", appLongitude: "77.6092681", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/AshokaEnclave_FrazerTown/image1.jpg",
        "../assets/images/appartments/AshokaEnclave_FrazerTown/image2.jpg",
        "../assets/images/appartments/AshokaEnclave_FrazerTown/image3.jpg",
        "../assets/images/appartments/AshokaEnclave_FrazerTown/image4.jpg",
        "../assets/images/appartments/AshokaEnclave_FrazerTown/image5.jpg"
      ]
    },
    {
      appId: 16, price: "28,000", rentType: "For Rent", address: "Jp Nagar 5th Phase", appName: "MBM Royale", appLatitude: "12.912420", appLongitude: "77.591072", markerUrl: "../assets/images/map_placeholder.png", appImage: [
        "../assets/images/appartments/MBMRoyal_JPNagar5thphase/LivingRoom.jpg",
        "../assets/images/appartments/MBMRoyal_JPNagar5thphase/Bedroom.jpg",
        "../assets/images/appartments/MBMRoyal_JPNagar5thphase/Wardrobe.jpg",
        "../assets/images/appartments/MBMRoyal_JPNagar5thphase/Kitchen.jpg",
        "../assets/images/appartments/MBMRoyal_JPNagar5thphase/Balcony.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image5.jpg",
        "../assets/images/appartments/Aishwarya_JPNagar7thPhase/image5.jpg"
      ]
    }

    ];
  }
}
