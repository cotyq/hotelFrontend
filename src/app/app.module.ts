import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from "./hotels/hotel.service";
import { HeaderComponent } from './utils/header/header.component';
import { StarsComponent } from './utils/stars/stars.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    StarsComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
