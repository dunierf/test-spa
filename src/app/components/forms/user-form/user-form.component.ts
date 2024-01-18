import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Models
import { Role } from '../../../core/models/user/role.model';
import { User } from '../../../core/models/user/user.model';

// Services
import { RoleService } from '../../../core/services/role/role.service';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  disabled: boolean = false;

  roles: Role [] = [];

  @Input() user: User | undefined = undefined;

  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();

  @Output() onUpdate: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService, private roleService: RoleService) {

  }

  ngOnInit(): void {
    this.roleService.getAll().subscribe({
      next: (resp) => {
        this.roles = resp.data;
      },
      error: err => {

      }
    })
  }

  onSubmit() {
    /*if (this.product !== undefined) {
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
            console.log(product);
            this.onCreate.emit(product);
          },
          error: err => {
            //
          }
        });
      }
    }*/
  }
}
