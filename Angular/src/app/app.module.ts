import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';


import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { AngmapComponent } from './angmap/angmap.component';
import { TreeComponent } from './tree/tree.component';
import { HeadComponent } from './head/head.component';
import { MetaComponent } from './meta/meta.component';
import { FaultComponent } from './fault/fault.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DelComponent } from './del/del.component';

import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';

import{ HttpClientModule} from '@angular/common/http';
import { TesttreeComponent } from './testtree/testtree.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AngmapComponent,
    TreeComponent,
    HeadComponent,
    MetaComponent,
    FaultComponent,
    AddComponent,
    EditComponent,
    DelComponent,
    TestComponent,
    TesttreeComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
