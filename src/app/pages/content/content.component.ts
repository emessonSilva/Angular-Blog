import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  photoCover:string = "https://www.morecap.com.br/assets/images/SM-placeholder.png"
  contentTitle:string = "Title"
  contentDescription:string = "Descrpition"

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
