import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Product } from './../../core/models/product/product.model';

// Services
import { ProductService } from './../../core/services/product/product.service';

// Components
import { CardComponent } from '../../components/card/card.component';
import { ProductFormComponent } from '../../components/forms/product-form/product-form.component';



@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductFormComponent, CardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  product: Product | undefined = undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {

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

  toCollection(product: Product) {
    this.router.navigate(['products']);
  }

}
