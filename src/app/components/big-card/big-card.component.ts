import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  //Deixando dinâmico
  @Input()
  photoCover:string = "" //coloca no html home
  @Input()
  cardTitle:string = "" //coloca no html home
  @Input()
  cardDescription:string = "" //coloca no html home

  constructor() { }

  ngOnInit(): void {
  }

}
