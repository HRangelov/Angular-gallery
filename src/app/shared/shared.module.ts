import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { MyValidatorDirective } from './my-validator.directive';

@NgModule({
  declarations: [
    WelcomeMessageComponent,
    MyValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent, 
    MyValidatorDirective
  ]
})
export class SharedModule { }