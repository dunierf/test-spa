import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Models
import { Product } from './../../core/models/product/product.model';

// Services
import { ProductService } from './../../core/services/product/product.service';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  product: Product | undefined = undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  newProduct() {
    this.product = {
      id: undefined,
      name: '',
      price: 0,
      image: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      const id = params['id'] ? parseInt(params['id']) : 0;

      if (id) {
        this.productService.getById(id).subscribe({
          next: (product: Product) => {
            this.product = product;
          },
          error: err => {
            this.newProduct();
          },
        })
      }
      else
        this.newProduct();
    });
  }

}
