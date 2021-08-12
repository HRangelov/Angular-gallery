import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPainting, IPost } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-painting',
  templateUrl: './paintings-list.component.html',
  styleUrls: ['./paintings-list.component.css']
})
export class PaintingsListComponent  {
  
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  paintingsList: IPainting[] | undefined;
  recentPosts: IPost[] | undefined;


  constructor(private contentService: ContentService,
    private userService: UserService) {
      this.fetchThemes();
    this.fetchRecentPosts();
  
     }
     
     fetchThemes(): void {
      this.paintingsList = undefined;
      this.contentService.loadPaintingsList().subscribe(paintingsList => this.paintingsList = this.paintingsList);
    }
  
    fetchRecentPosts(): void {
      this.recentPosts = undefined;
      this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
    }


}
