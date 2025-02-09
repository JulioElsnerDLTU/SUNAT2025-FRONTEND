import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { ToolbarModule } from 'primeng/toolbar';
import {AppComponent} from './app.component';
import {HomeComponent} from './public/pages/home/home.component';
import {FormsModule} from '@angular/forms';
import { ClientListComponent } from './components/client-list/client-list.component';
import {ClientService} from './public/pages/home/services/client.service';
import {UserService} from './public/pages/home/services/user.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    StyleClassModule,
    ToolbarModule,
    NgOptimizedImage,
    CardModule,
    ImageModule,
    AppComponent,
    HomeComponent,
    AppComponent,
    FormsModule,
    ClientListComponent
  ],
  providers: [ClientService, UserService],
  bootstrap: []
})
export class AppModule { }
