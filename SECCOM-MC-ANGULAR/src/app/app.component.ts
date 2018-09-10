import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){}

  lerDados() {
    var url = "http://localhost:3000/comments";
    this.http.get(url).toPromise()
    .then(resp => console.log(resp));
  }
}
