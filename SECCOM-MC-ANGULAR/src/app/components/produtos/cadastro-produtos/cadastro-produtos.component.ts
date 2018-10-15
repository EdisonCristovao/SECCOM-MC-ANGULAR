import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from './../../../../model/Produtos';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent {

  baseUrl = environment.baseUrl;
  produto: Produto;
  
  constructor(private http: HttpClient,
              private route: Router) { 
    this.produto = new Produto();
  }

  salvarProduto() {
    console.log(this.produto);

    this.http.post(`${this.baseUrl}/produtos`, this.produto).toPromise()
    .then(() => this.route.navigate(['/produtos']));

  }

}
