import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './view_components/post-list/post-list.component';
import { AboutComponent } from './view_components/about/about.component';
import { LoginComponent } from './view_components/login/login.component';
import { ProfilesComponent } from './view_components/profiles/profiles.component';
import { UserProfileComponent } from './view_components/user-profile/user-profile.component';
import { PostComponent } from './subcomponents/post/post.component';
import { RegisterComponent } from './view_components/register/register.component';
import { CompanyListComponent } from './view_components/company-list/company-list.component';
import { SearchResultsComponent } from './view_components/search-results/search-results.component';
import { HomeComponent } from './view_components/home/home.component';
import { PostPageComponent } from './panels/post-page/post-page.component';
import { CompanyProfileComponent } from './view_components/company-profile/company-profile.component';
import { QuestionListComponent } from './view_components/question-list/question-list.component';


export var routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'connected', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'discover/:posttype', component: PostListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/:email', component: UserProfileComponent },
  { path: 'company/:id', component: CompanyProfileComponent },
  { path: 'post/:post_id', component: PostPageComponent },
  { path: 'users', component: ProfilesComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'search/:q', component: SearchResultsComponent},
  { path: 'questions', component: QuestionListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
