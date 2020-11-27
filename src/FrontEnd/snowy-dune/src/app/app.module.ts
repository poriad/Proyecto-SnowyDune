import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from "@angular/common";


/**
 * Componentes
 * 
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * Material Modules
 * 
 */


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeUserComponent } from './layouts/home-user/home-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { StationComponent } from './layouts/station/station.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { TripComponent } from './layouts/trip/trip.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { CartComponent } from './layouts/cart/cart.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { HomeEnterpriseComponent } from './layouts/home-enterprise/home-enterprise.component';
import { HomeAdminComponent } from './layouts/home-admin/home-admin.component';
import { AdminUsersEnterprisesComponent } from './layouts/admin-users-enterprises/admin-users-enterprises.component';
import { AdminServicesCommentsComponent } from './layouts/admin-services-comments/admin-services-comments.component';
import { StationCardComponent } from './components/station-card/station-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { HotelComponent } from './layouts/hotel/hotel.component';
import { AdminClassesComponent } from './components/admin-classes/admin-classes.component';
import { AdminCarRentalComponent } from './components/admin-car-rental/admin-car-rental.component';
import { AdminSkiMaterialComponent } from './components/admin-ski-material/admin-ski-material.component';
import { AdminHotelComponent } from './components/admin-hotel/admin-hotel.component';
import { AdminStationComponent } from './components/admin-station/admin-station.component';
import { AdminCreateStationComponent } from './components/admin-create-station/admin-create-station.component';
import { EnterpriseRegisterComponent } from './components/enterprise-register/enterprise-register.component';
import { EnterpriseCommentsComponent } from './components/enterprise-comments/enterprise-comments.component';
import { EnterpriseServicesComponent } from './components/enterprise-services/enterprise-services.component';
import { EnterpriseListServicesComponent } from './components/enterprise-list-services/enterprise-list-services.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeUserComponent,
    FooterComponent,
    StationComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    TripComponent,
    UserManagementComponent,
    CartComponent,
    ContactComponent,
    HomeEnterpriseComponent,
    HomeAdminComponent,
    AdminUsersEnterprisesComponent,
    AdminServicesCommentsComponent,
    StationCardComponent,
    SearchComponent,
    HotelComponent,
    AdminClassesComponent,
    AdminCarRentalComponent,
    AdminSkiMaterialComponent,
    AdminHotelComponent,
    AdminStationComponent,
    AdminCreateStationComponent,
    EnterpriseRegisterComponent,
    EnterpriseCommentsComponent,
    EnterpriseServicesComponent,
    EnterpriseListServicesComponent,
    ConfirmDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    NgbModule,
    CommonModule,
    Ng2SearchPipeModule,
    
    MatButtonModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule { }