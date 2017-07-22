import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor()
  {
    /* http.get('/api/getData').subscribe((res)=>{
      
      console.log(res);
    }); */
  }



}
