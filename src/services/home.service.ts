import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  scopeIP:string;
  constructor(private httpClient:HttpClient) { 
    this.scopeIP = "http://apidev.oyespace.com/";
  }

  requestCall(reqAppDetails){
    let headers = new HttpHeaders().append('Content-Type', 'application/json')
    .append('X-Home-APIKey', '33D88B4C-C322-4E51-9D65-5A2B828937A2')
    .append('Access-Control-Allow-Origin', "*");
    this.httpClient.post(this.scopeIP + 'oyehomes/api/RequestCall/Create ', JSON.stringify(reqAppDetails), { headers: headers })
    .subscribe(
      data=>{
        console.log(data);
      },
      err=>{
         console.log(err)
      }
      
    )
  }
}
