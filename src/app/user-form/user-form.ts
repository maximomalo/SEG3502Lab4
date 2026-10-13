import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  private router = inject(Router);

  userForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.pattern(/^[1-9]\d{2}[1-9]\d{6}$/)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email]
    })
  });

  submit(): void {
    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) {
      return;
    }

    sessionStorage.setItem(
      'userData',
      JSON.stringify(this.userForm.getRawValue())
    );

    this.router.navigate(['/details']);
  }
}