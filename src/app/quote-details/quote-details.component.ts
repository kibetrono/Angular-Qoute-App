import { Component, Input, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  public count = 0;

  constructor() { }

  ngOnInit(): void {
  }



  quotes: Quote[] = [
    new Quote("Kibet", "Everything You’ve Ever Wanted Is On The Other Side Of Fear.", "George Addair", new Date(2021, 11, 22)),
    new Quote("Mercy", "Success Does Not Consist In Never Making Mistakes, But In Never Making The Same One A Second Time.", "George Bernard Shaw", new Date(2021, 11, 24))
  ]



  myFormData(data: any) {
    data.datePosted = new Date(data.datePosted)
    this.quotes.push(data)

  }


  showquote(index: number) {
    this.quotes.map((value, i) => {
      if (i == index) {
        this.quotes[index].showAllQuotes = !this.quotes[index].showAllQuotes

      }
    })
  }

  adding(index: number) {
    this.quotes[index].likevotes = this.quotes[index].likevotes + 1;
    if (this.quotes[index].likevotes > this.count) {
      this.count = this.quotes[index].likevotes;
    }

  }


  deleteData(allComplete: boolean, i: number) {

    if (allComplete) {

      const confirmDelete = confirm(`Are you sure you want to delete the quote from ${this.quotes[i].name}?`)

      if (confirmDelete) {

        this.quotes.splice(i, 1)
      }

    }


  }



}
