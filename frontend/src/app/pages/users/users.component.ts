import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [CommonModule]
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  errorMessage = '';


  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.users = [];

    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: () => {
        this.errorMessage = 'Erro ao carregar usuários. Verifique a conexão.';
      }
    });
  }

  logout() {
    this.authService.logout()
  }

  changeStatus(id: number) {
    this.userService.changeStatus(id).subscribe({
      next: () => {
        this.loadUsers();
      },
      error: () => {
      }
    })
  }
}
