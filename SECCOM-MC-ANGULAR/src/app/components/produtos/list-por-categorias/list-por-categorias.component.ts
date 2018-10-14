import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-por-categorias',
  templateUrl: './list-por-categorias.component.html',
  styleUrls: ['./list-por-categorias.component.css']
})
export class ListPorCategoriasComponent implements OnInit {

  produtos: any[] = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      const categoria = params['categoria'];
      if(categoria !== undefined) {
        
        const params = new HttpParams()
              .set('categoria', categoria);

        this.http.get("http://localhost:3000/produtos", {params}).toPromise()
        .then(data => {
          this.produtos = data;
        });
      }
    });
  }

}
