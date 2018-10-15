import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListProdutosComponent } from './components/produtos/list-produtos/list-produtos.component';
import { SideBarCategoriasComponent } from './components/side-bar/side-bar-categorias/side-bar-categorias.component';
import { ShowItemComponent } from './components/produtos/show-item/show-item.component';
import { ListPorCategoriasComponent } from './components/produtos/list-por-categorias/list-por-categorias.component';
import { CadastroProdutosComponent } from './components/produtos/cadastro-produtos/cadastro-produtos.component';

const appRoutes: Routes = [
  { path: 'produtos', component: ListProdutosComponent },
  { path: 'produtos/:id', component: ListProdutosComponent },

  { path: 'cadastro-produto', component: CadastroProdutosComponent },
  
  { path: 'categoria/:categoria', component: ListPorCategoriasComponent },

  { path: '', redirectTo: '/produtos', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    
    //template
    HeaderComponent,
    FooterComponent,

    //produtos
    ListProdutosComponent,
    ShowItemComponent,

    //sidebar
    SideBarCategoriasComponent,

    ListPorCategoriasComponent,

    CadastroProdutosComponent
    
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
