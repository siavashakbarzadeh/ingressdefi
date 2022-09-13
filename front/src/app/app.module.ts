import { UserprofileComponent } from './pages/nft/userprofile/userprofile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LayoutComponent } from './layout/layout.component';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { TabsModule } from 'ngx-bootstrap/tabs';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { LoginAddressComponent } from './pages/login-address/login-address.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailsComponent } from './pages/blogdetails/blogdetails.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  FooterComponent,
  // FarmComponent,
  LoginComponent,
  LoginAddressComponent,
  PrivacyComponent,
  BlogComponent,
  BlogdetailsComponent,
  UserprofileComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  PagesModule,
  NgxPaginationModule,
  ModalModule.forRoot(),
  TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
