import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../state/post.model";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() content: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
