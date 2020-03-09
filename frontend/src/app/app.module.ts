import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatTableModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './pages/details/details.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PaymentCardModule} from "./components/payment-card/payment-card.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    PaymentCardModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
