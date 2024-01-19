import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Models
import { Product } from '../../../core/models/product/product.model';

// Services
import { ProductService } from '../../../core/services/product/product.service';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  disabled: boolean = false;

  @Input() product: Product | undefined = undefined;

  @Output() onCreate: EventEmitter<Product> = new EventEmitter<Product>();

  @Output() onUpdate: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) {

  }

  onSubmit() {
    if (this.product !== undefined) {
      if (this.product?.id) {
        this.productService.put(this.product).subscribe({
          next: (product: Product) => {
            this.onUpdate.emit(product);
          },
          error: err => {
            //
          }
        });
      } else {
        this.productService.post(this.product).subscribe({
          next: (product: Product) => {
            this.onCreate.emit(product);
          },
          error: err => {
            //
          }
        });
      }
    }
  }

}
