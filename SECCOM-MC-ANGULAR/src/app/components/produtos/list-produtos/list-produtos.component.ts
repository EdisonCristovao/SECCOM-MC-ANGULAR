import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Produto } from './../../../../model/Produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  produtos: any[] = [];


  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.http.get("http://localhost:3000/produtos").toPromise()
    .then(data => {
      this.produtos = data;
    });
  }

}
