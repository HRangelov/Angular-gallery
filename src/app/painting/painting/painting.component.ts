import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { IPainting } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent  {
  painting: IPainting | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchPainting();
  }

  fetchPainting(): void {
    this.painting = undefined;
    const id = this.activatedRoute.snapshot.params.paintingId;
    this.contentService.loadPainting(id).subscribe(painting => this.painting = painting);
  }

  

}
