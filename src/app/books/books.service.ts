import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root',
}

)
export class BooksService {

  constructor() { }



  getBooks(){
    return[
      {
        name: 'Clean Code',
      author :'Robert C Martin',
      src:'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
      amount:700
    },
    {
      name:'Progmatic Programmer',
      author:'David Thomas',
      src:'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount:800
    },
    {
      name:'Gmatic Programmer',
      author:'David Thomas',
      src:'https://m.media-amazon.com/images/I/51yaxPX4BFL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount:900
    }
    ]
  }
}


