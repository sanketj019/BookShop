import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[] = [];

  constructor(private booksService: BooksService) {

   }



  isShowing: boolean = true;


  ngOnInit(): void {
    this.books=this.booksService.getBooks();
  }

  toggleBooks(){
    this.isShowing =!this.isShowing;
  }

  myName2WayBinding:string='';
  myName:string = '';
  handleInput(event: any){
      this.myName = event.target.value;
  }


}
