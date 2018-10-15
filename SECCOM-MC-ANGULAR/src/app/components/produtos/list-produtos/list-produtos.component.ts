import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})

export class ListProdutosComponent implements OnInit {

  baseUrl = environment.baseUrl;
  produtos = [];

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    console.log(this.baseUrl);
    this.http.get(`${this.baseUrl}/produtos`).toPromise()
    .then((data: any[]) => {
      this.produtos = data;
    });
  }

}
