import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { navigationRoutes } from './navigationRoutes.routes';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(navigationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
