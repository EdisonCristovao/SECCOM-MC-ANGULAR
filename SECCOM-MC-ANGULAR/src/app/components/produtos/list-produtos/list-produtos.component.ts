import { Produto } from './../../../../model/Produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  produtos: Produto[];

  constructor() { 

  }

  ngOnInit() {
    this.produtos = [
      {codigo: 1, descricao: "Carro novo", categoria: 1, price: 9000},
      {codigo: 2, descricao: "Carro novo", categoria: 1, price: 9000},
      {codigo: 3, descricao: "Carro novo", categoria: 1, price: 9000},
      {codigo: 4, descricao: "Carro novo", categoria: 1, price: 9000},
      {codigo: 5, descricao: "Carro novo", categoria: 1, price: 9000},
      {codigo: 6, descricao: "Carro novo", categoria: 1, price: 9000}
    ];
    console.log(this.produtos);

  }

}
