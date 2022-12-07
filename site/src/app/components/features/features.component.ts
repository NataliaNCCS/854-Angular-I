import { FeaturesSectionData } from './../../models/features-section-data.model';
import { FeatureData } from './../../models/feature-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() public FeatureData!: FeaturesSectionData
  @Output() public FeatureCreated: EventEmitter<string> = new EventEmitter<string>() 
  constructor() { }

  ngOnInit() {
    this.FeatureCreated.emit('feature');
  }

}
 