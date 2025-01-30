import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  successMessage: string = '';
  errorMessage: string = '';
  registerForm: FormGroup;
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      birthDate: ['', Validators.required ]
    });
  }

  register() {
    this.registerForm.markAllAsTouched();
    this.isLoading = true;
    if(this.registerForm.invalid) {
      this.isLoading = false;
      return;
    };
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Registro realizado com sucesso!';
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log('err', err)
        this.isLoading = false;
        this.errorMessage = err?.error?.text || 'Erro ao registrar. Tente novamente.';
      }
    });
  }
}
