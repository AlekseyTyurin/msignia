import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  cardNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16)
  ]);
  constructor() { }

  ngOnInit() {
  }

}
