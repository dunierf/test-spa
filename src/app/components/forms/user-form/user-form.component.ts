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

  toggleRole(role: Role, target: any) {
    if (target.checked)
      this.user?.roles?.push(role);
    else
      this.user?.roles?.splice(this.user?.roles?.findIndex( r => r.id == role.id), 1);
  }

  checkedRole(role: Role) {
    return (this.user?.roles?.findIndex( r => r.id == role.id) !== -1);
  }

  onSubmit() {
    if (this.user?.id) {
      this.userService.put(this.user).subscribe({
        next: (user: User) => {
          this.onUpdate.emit(user);
        },
        error: err => {
          //
        }
      });
    } else if (this.user) {
      this.userService.post(this.user).subscribe({
        next: (user: User) => {
          this.onCreate.emit(user);
        },
        error: err => {
          //
        }
      });
    }
  }
}
