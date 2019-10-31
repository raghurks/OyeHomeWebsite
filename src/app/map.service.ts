import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitude:string;
  longitude:string;
}
@Injectable({
  providedIn: 'root'
})
export class MapService {
  appImgCount:any;

  constructor(private http:HttpClient) { 
    this.appImgCount= 0;
  }

getLocation(){
return this.http.get<Location>('http:api.ipapi.com/api/check?acess_key=5d1c52d2a6c92e4d2a1d1a8bfd8d699f')
}

  
}
