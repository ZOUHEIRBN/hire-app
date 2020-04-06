import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferListComponent } from './offer-list/offer-list.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { CompanyThumbnailComponent } from './company-thumbnail/company-thumbnail.component';


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
