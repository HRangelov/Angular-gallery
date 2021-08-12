import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'app-new-painting',
  templateUrl: './new-painting.component.html',
  styleUrls: ['./new-painting.component.css']
})
export class NewPaintingComponent {

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }
  
  createPainting(form: NgForm): void {
    if (form.invalid) { return; }
    this.contentService.saveTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(['/paintings-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  

}
