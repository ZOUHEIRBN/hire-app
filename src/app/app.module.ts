import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

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
import { PostPageComponent } from './view_components/post-page/post-page.component';
import { ResumeComponent } from './subcomponents/resume/resume.component';
import { CompanyProfileComponent } from './view_components/company-profile/company-profile.component';
import { GoogleMapComponent } from './minicomponents/google-map/google-map.component';
import { NewPostPanelComponent } from './subcomponents/newPost/new-post-panel/new-post-panel.component';
import { NewJobOfferComponent } from './subcomponents/newPost/new-job-offer/new-job-offer.component';
import { NewJobDemandComponent } from './subcomponents/newPost/new-job-demand/new-job-demand.component';
import { CommentSectionComponent } from './minicomponents/comment-section/comment-section.component';
import { SidenavComponent } from './minicomponents/sidenav/sidenav.component';
import { ConnectionPanelComponent } from './minicomponents/connection-panel/connection-panel.component';

import { SERVER_URL } from './services/post.service';
import { PostEditorDialogComponent } from './subcomponents/newPost/post-editor-dialog/post-editor-dialog.component';
import { SocketService } from './services/socket.service';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
const socket_config: SocketIoConfig = { url: SERVER_URL, options: {'Access-Control-Allow-Origin': '*'}  };

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
    PostPageComponent,
    ResumeComponent,
    CompanyProfileComponent,
    GoogleMapComponent,
    NewPostPanelComponent,
    NewJobOfferComponent,
    NewJobDemandComponent,
    CommentSectionComponent,
    SidenavComponent,
    ConnectionPanelComponent,
    PostEditorDialogComponent,
    NotificationsListComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(socket_config),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTreeModule,
    MatStepperModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatRippleModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2pCpXrCKOgMJNl_qyHapgyfVRN2Rc6_Y'
    })

  ],
  providers: [ UserService, OfferListComponent, SocketService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
