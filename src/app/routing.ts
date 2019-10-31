import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FromoyeomesComponent } from './fromoyeomes/fromoyeomes.component';
import { TooyehomesComponent } from './tooyehomes/tooyehomes.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import{ HomeComponent } from './home/home.component';
import { HiringComponent } from './hiring/hiring.component';
import { MapsComponent } from './maps/maps.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component'; 
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './location/location.component';
import { from } from 'rxjs';

const routes: Routes = [
    { path: '',redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'hiring', component: HiringComponent },
    { path: 'formoyehomes', component:FromoyeomesComponent},
    { path: 'tooyehomes', component:TooyehomesComponent},
    { path: 'viewdetails', component:ViewdetailsComponent},
    { path: 'maps', component:MapsComponent},
    { path: 'clients', component:ClientsComponent},
    { path: 'location', component:LocationComponent},
    { path: 'about', component:AboutComponent},
    { path: 'testimonials', component:TestimonialsComponent}
]



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    })
export class Routing {
}
