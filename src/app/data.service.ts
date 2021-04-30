import { Injectable } from '@angular/core';
import{Http,Response,Headers}from'@angular/http';
//import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }

    getHotelData()
    {
       return this.http.get('http://localhost:4906/api/get_data')
      // .pipe(map(res=>res.json()))
    
  }

  getEdate()
  {
    return this.http.get('http://localhost:4906/api/get_data')
       
   // return this.http.get('http://localhost:4906/api/get_Edate_data')
  
 

  }
    addHotelData(newList)
    {
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:4906/api/add_data',newList,{headers:headers})
       .pipe(map(res=>res.json()));
    
    }
    checkDate()
    {
      
    

    }

}
