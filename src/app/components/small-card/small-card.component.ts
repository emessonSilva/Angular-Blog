import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  //Deixando dinâmico
  @Input()
  photoCover:string = "" //passa o valor no html home
  @Input()
  cardTitle:string = "" //passa o valor no html home
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
