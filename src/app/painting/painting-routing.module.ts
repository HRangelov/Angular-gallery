import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthActivated } from '../core/guards/auth.activated';
import { NewPaintingComponent } from './new-painting/new-painting.component';
import { PaintingComponent } from './painting/painting.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';

const routes: Routes = [
  {
    // path: '',
    // children: []
    path: 'paintings-list',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: PaintingsListComponent
        },
        {
            path: ':paintingId',
            component: PaintingComponent
        }
    ]
  },
  {
  path: 'add-painting',
  component: NewPaintingComponent,
  canActivate:[AuthActivated],
  data:{
    authenticationRequired: true,
    authenticationFailureRedirectUrl: '/login',
  }
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }