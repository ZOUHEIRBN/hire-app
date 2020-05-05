import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OfferListComponent } from './view_components/offer-list/offer-list.component';
import { AboutComponent } from './view_components/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";


import { BadgeComponent } from './minicomponents/badge/badge.component';
import { LoginComponent } from './view_components/login/login.component';
import { UserThumbnailComponent } from './subcomponents/user-thumbnail/user-thumbnail.component';
import { UserService } from './services/user.service';
import { ProfilesComponent } from './view_components/profiles/profiles.component';
import { UserProfileComponent } from './view_components/user-profile/user-profile.component';
import { PostComponent } from './subcomponents/post/post.component';
import { RegisterComponent } from './view_components/register/register.component';
import { PostFilterComponent } from './minicomponents/post-filter/post-filter.component';
import { CompanyThumbnailComponent } from './subcomponents/company-thumbnail/company-thumbnail.component';

import { NotificationComponent } from './minicomponents/notification/notification.component';
import { CompanyListComponent } from './view_components/company-list/company-list.component';
import { SearchResultsComponent } from './view_components/search-results/search-results.component';
import { HomeComponent } from './view_components/home/home.component';
import { PostPageComponent } from './view_components/post-page/post-page.component'
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    AboutComponent,
    BadgeComponent,
    LoginComponent,
    UserThumbnailComponent,
    ProfilesComponent,
    UserProfileComponent,
    PostComponent,
    RegisterComponent,
    PostFilterComponent,
    CompanyThumbnailComponent,
    NotificationComponent,
    CompanyListComponent,
    SearchResultsComponent,
    HomeComponent,
    PostPageComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2pCpXrCKOgMJNl_qyHapgyfVRN2Rc6_Y'
    })

  ],
  providers: [ UserService, OfferListComponent, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
