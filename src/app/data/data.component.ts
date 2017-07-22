import { Component, OnInit } from '@angular/core';

import {DataServiceService} from './services/data-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[DataServiceService]
})
export class DataComponent implements OnInit {

  constructor(private dataServiceService: DataServiceService) {
    this.dataServiceService.dataServiceMethod().subscribe((res)=>{
      console.log(res);
    });
   }

  ngOnInit() {
  }

}
