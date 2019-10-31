import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './routing';
import { RequestformComponent } from './requestform/requestform.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { FromoyeomesComponent } from './fromoyeomes/fromoyeomes.component';
import { TooyehomesComponent } from './tooyehomes/tooyehomes.component';
import { HiringComponent } from './hiring/hiring.component';
import { MapsComponent } from './maps/maps.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AgmCoreModule } from '@agm/core';
import { JwPaginationComponent } from 'jw-angular-pagination';
export const firebaseConfig = environment.firebaseConfig;
import { OrderModule } from 'ngx-order-pipe';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ClientsComponent } from './clients/clients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestformComponent,
    FromoyeomesComponent,
    TooyehomesComponent,
    HiringComponent,
    JwPaginationComponent,
    ViewdetailsComponent,
    MapsComponent,
    ClientsComponent,
    TestimonialsComponent,
    LocationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule,
    FormsModule,
    Routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapsKey
    }),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
