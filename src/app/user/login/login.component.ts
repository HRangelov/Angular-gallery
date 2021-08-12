import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import { validEmail } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  icons = {
    faEnvelope,
    faLock
  };

    emailValidator = validEmail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router:Router) { }

    login(form: NgForm): void {
      if (form.invalid) {return; }
      const {email, password} = form.value;
      this.userService.login({email, password}).subscribe({
        next: () =>{
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
        this.router.navigate([redirectUrl]);
        },
        error: (err) => {
          console.log(err);
          // dispaly alert "Wrong username or passowrd"

        }
        });
    }
    
  }

