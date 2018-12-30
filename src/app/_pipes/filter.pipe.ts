import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../books-list/book.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Book[], filterString: string): any {

    if(value.length === 0 || filterString === '') {
      return value;
    }
    
    const regex = new RegExp(filterString, 'i');

    return value.filter((el: Book) => 
      el.title.match(regex) || el.author.match(regex)
    );
  }

}
