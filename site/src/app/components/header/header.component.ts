import { InputSearchData } from './../../models/input-search-data.model';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() HeaderCreated: EventEmitter<string> = new EventEmitter<string>();
  @Output() public inputSearch: EventEmitter<InputSearchData> = new EventEmitter<InputSearchData>();
  public searchData: InputSearchData = {inputSearch: ""};

  constructor() { }

  ngOnInit() {
    this.HeaderCreated.emit('header')
  }

  public submitSearch():void {
    this.inputSearch.emit(this.searchData);
    console.log('Pesquisa realizada');
  }

}
