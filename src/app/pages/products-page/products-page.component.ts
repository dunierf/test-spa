import { Component, OnInit } from '@angular/core';

// Models
import { Product } from './../../core/models/product/product.model';

// Services
import { ProductService } from './../../core/services/product/product.service';

// Components
import { DataGridComponent } from '../../components/data-grid/data-grid.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [DataGridComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  items: Product[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (response: { data: Product[] }) => {
        this.items = response.data;
      },
      error: err => {

      }
    });
  }

}
