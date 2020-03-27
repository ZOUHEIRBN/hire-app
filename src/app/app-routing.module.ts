import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'offers', component: OfferComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
