import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdescriptioncomponent',
  templateUrl: './bookdescriptioncomponent.component.html',
  styleUrls: ['./bookdescriptioncomponent.component.css']
})
export class BookdescriptioncomponentComponent implements OnInit {

  bookValue = '$50.000,00';
  bookDesc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum maiores minima perferendis soluta ipsa ipsum, totam, praesentium libero non ut accusamus eius, error deleniti quidem consectetur exercitationem qui neque magni. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo soluta repellat minima sit. Tenetur veniam laudantium, tempore porro, autem nobis recusandae iure ratione harum qui nulla aspernatur incidunt odit facere?';

  constructor() { }

  ngOnInit(): void {
  }

}
