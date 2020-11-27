import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';


@NgModule({
  declarations: [GalleryComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
