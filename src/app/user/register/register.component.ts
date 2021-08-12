import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { sameValueAsFactory, validEmail } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy{
  killSubscription = new Subject();
  form!: FormGroup;

  constructor(
    private formb: FormBuilder,
    private userService: UserService,
    private router: Router) { 
    this.form = this.formb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, validEmail]],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required, sameValueAsFactory(
        () => this.form?.get('password'), this.killSubscription
      )]]  
    });
  }

  register(): void {
    if (this.form.invalid) { 
      return; 
    }
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
  

}
