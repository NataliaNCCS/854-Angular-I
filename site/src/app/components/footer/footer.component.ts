import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() FooterCreated: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    this.FooterCreated.emit('footer')
  }

}
