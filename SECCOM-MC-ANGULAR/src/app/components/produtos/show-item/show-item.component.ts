import { Produto } from './../../../../model/Produtos';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {
    
  }

}
