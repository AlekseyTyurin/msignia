import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./pages/details/details.component";
import {PurchaseComponent} from "./pages/purchase/purchase.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'purchase', component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
