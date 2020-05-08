import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelModule } from '../model/model.module'
import { StoreComponent } from './store.component'
import { CartSummaryComponent } from './cartSummary.component'
import { CartDetailComponent } from './cartDetail.component'
import { CheckoutComponent } from './checkout.component'
import { RouterModule } from '@angular/router'
import { SearchBarComponent } from './search-bar.component'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,],
  declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent,SearchBarComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}