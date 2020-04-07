import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferListComponent } from './view_components/offer-list/offer-list.component';
import { AboutComponent } from './view_components/about/about.component';
import { LoginComponent } from './view_components/login/login.component';
import { ProfilesComponent } from './view_components/profiles/profiles.component';
import { UserProfileComponent } from './view_components/user-profile/user-profile.component';
import { PostComponent } from './subcomponents/post/post.component';
import { RegisterComponent } from './view_components/register/register.component';
import { CompanyThumbnailComponent } from './subcomponents/company-thumbnail/company-thumbnail.component';


export var routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'offers', component: OfferListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':usertype/:id', component: UserProfileComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'users', component: ProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
