import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { OutpostsComponent } from './outposts/outposts.component';
import { OutpostDetailsComponent } from './outpost-details/outpost-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { OutpostService } from './outpost.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    OutpostsComponent,
    OutpostDetailsComponent,
    DashboardComponent,
    MessagesComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ OutpostService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
