import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { PaintingRoutingModule } from './painting-routing.module';
import { NewPaintingComponent } from './new-painting/new-painting.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaintingComponent,
    PaintingsListComponent,
    NewPaintingComponent
  ],
  imports: [
    CommonModule,
    PaintingRoutingModule,
    FormsModule,
    PaintingRoutingModule
  ]
})
export class PaintingModule { }
