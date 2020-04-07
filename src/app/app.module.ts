import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfferListComponent } from './view_components/offer-list/offer-list.component';
import { AboutComponent } from './view_components/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { OfferDetailsComponent } from './subcomponents/offer-details/offer-details.component';
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

import { NotificationComponent } from './minicomponents/notification/notification.component'
@NgModule({
  declarations: [
    AppComponent,
    OfferListComponent,
    AboutComponent,
    OfferDetailsComponent,
    BadgeComponent,
    LoginComponent,
    UserThumbnailComponent,
    ProfilesComponent,
    UserProfileComponent,
    PostComponent,
    RegisterComponent,
    PostFilterComponent,
    CompanyThumbnailComponent,
    NotificationComponent
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
    MatProgressSpinnerModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2pCpXrCKOgMJNl_qyHapgyfVRN2Rc6_Y'
    })

  ],
  providers: [ UserService, OfferListComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
