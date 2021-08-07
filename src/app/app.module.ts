import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PaintingComponent } from './painting/painting.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    PaintingComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    UserModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
