import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.css']
})
export class FilterFieldComponent implements OnInit {

  set searchText(text: string) {
    this.searchTextEmitter.emit(text);
  }
  @Output('text') searchTextEmitter: EventEmitter<string> = new EventEmitter();;

  constructor() { }

  ngOnInit() {
  }
}
