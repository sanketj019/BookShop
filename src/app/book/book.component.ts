import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksService } from '../books/books.service';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  @Input() book:Book={} as Book;
  isInCart:boolean=false;

  addToCart(){
    this.isInCart=true;
   this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book);
  }
}
