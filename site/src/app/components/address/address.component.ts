import { AddressSectionData } from './../../models/address-section-data.model';
import { AddressData } from './../../models/address-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() addressData!: AddressSectionData  
  @Output() AddressCreated: EventEmitter<string> = new EventEmitter<string>();  
  // public addressData: AddressData = {
  //   street: "Rua Luiz Galvez",
  //   number: 254,
  //   complement: "3º andar, sala 306",
  //   state: "AC",
  //   city: "Rio Branco",
  //   district: "Conjunto Castelo Branco",
  //   zipCode: "69911-262"
  // }

  constructor() { }

  ngOnInit() {
    this.AddressCreated.emit('address');
  }

}
