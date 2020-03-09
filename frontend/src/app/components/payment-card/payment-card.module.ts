import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {PaymentCardComponent} from './payment-card.component';
import {PaymentCardService} from './service/payment-card.service';
import {PaymentCardNumberPipe} from './pipe/payment-card-number/payment-card-number.pipe';
import {ValidThruPipe} from './pipe/valid-thru/valid-thru.pipe';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from "@angular/material";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [
    PaymentCardComponent,
    PaymentCardNumberPipe,
    ValidThruPipe],
  providers: [
    PaymentCardService
  ],
  exports: [
    PaymentCardComponent
  ],
})
export class PaymentCardModule {
}
