import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from "@angular/flex-layout";
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { BadgeComponent } from './badge/badge.component';
import { LoginComponent } from './login/login.component';
import { UserThumbnailComponent } from './user-thumbnail/user-thumbnail.component';
import { UserService } from './services/user.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { PostFilterComponent } from './post-filter/post-filter.component';
import { CompanyThumbnailComponent } from './company-thumbnail/company-thumbnail.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';
import { NotificationComponent } from './notification/notification.component'
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
