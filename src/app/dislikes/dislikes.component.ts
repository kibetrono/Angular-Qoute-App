import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.css']
})
export class DislikesComponent implements OnInit {

  downVoteNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  counntDownvote() {
    this.downVoteNumber++
  }
}
