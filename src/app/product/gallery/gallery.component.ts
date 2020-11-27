import { CategoryService } from './../category.service';
import { CartComponent } from './../cart/cart.component';
import { ToastrService } from 'ngx-toastr';
import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products = []
  allProducts = []
  categories = []


  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private cartService: CartService,
    private productService: ProductService ) { }

  ngOnInit(): void {
    this.loadProducts()
    this.loadCategories()
  }

  filterProducts(event) {
    const categoryId = event.target.value
    this.products = []
    if (categoryId == -1) {
      this.products = this.allProducts
    } else {
      this.products = this.allProducts.filter(product => {
        return product.category['id'] == categoryId
      })
    }

  }

  loadCategories() {
    this.categoryService
    .getCategories()
    .subscribe(response=> {
      if(response['status'] == 'success') {
        this.categories = response['data']
        this.categories.push({id: -1,title: 'All Categories'})
      }
    })
  }

  loadCart() {
    this.modalService.open(CartComponent, {size: 'lg'})
  }

loadProducts() {
  this.productService
  .getProducts()
  .subscribe(response=> {
    console.log(response)
    if(response['status'] == 'success') {
      this.allProducts = response['data']
      this.products = this.allProducts
    }
  })
  }

  addToCart(product) {
    this.cartService
    .addCartItems(product['id'], product['price'], 1)
    .subscribe(response=> {
      if(response['status'] == 'success') {
        this.toastr.success('added your product to cart')
      }
  })
}
}
