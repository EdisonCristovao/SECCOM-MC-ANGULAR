import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListProdutosComponent } from './components/produtos/list-produtos/list-produtos.component';
import { SideBarCategoriasComponent } from './components/side-bar/side-bar-categorias/side-bar-categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    FooterComponent,
    ListProdutosComponent,
    SideBarCategoriasComponent
    
  ],
  imports: [
    BrowserModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
