import { environment } from './../../../../environments/environment.prod';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-por-categorias',
  templateUrl: './list-por-categorias.component.html',
  styleUrls: ['./list-por-categorias.component.css']
})
export class ListPorCategoriasComponent implements OnInit {

  baseUrl = environment.baseUrl;
  produtos = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    
    this.route.params.forEach(params => {
      const categoria = params['categoria'];
      if(categoria !== undefined) {
        
        const params = new HttpParams()
              .set('categoria', categoria);

        this.http.get(`${this.baseUrl}/produtos`, {params}).toPromise()
        .then((data:any[]) => {
          this.produtos = data;
        });
      }
    });
  }

}
