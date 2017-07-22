import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  constructor(private http: Http) { }
dataServiceMethod()
{
  return this.http.get('/api/getData').map((data)=>{
    console.log(data.json());
    return data.json();
  });
}
}
