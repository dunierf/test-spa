import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private productService: ProductService, private router: Router) {

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

  delete(id: number) {
    this.productService.delete(id).subscribe({
      next: () => {
        const index = this.items.findIndex(item => item.id == id);
        this.items.splice(index, 1);
      },
      error: err => {

      }
    });
  }

  edit(id: number) {
    this.router.navigate(['product', id.toString()]);
  }

}
