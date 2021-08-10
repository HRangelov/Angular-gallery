import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingRoutingModule } from './painting-routing.module';



@NgModule({
  declarations: [
    PaintingComponent,
    PaintingsListComponent
  ],
  imports: [
    CommonModule,
    PaintingRoutingModule
  ]
})
export class PaintingModule { }
