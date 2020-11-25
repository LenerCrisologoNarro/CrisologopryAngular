import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponentsComponent } from './components/header-components/header-components.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RightComponent } from './components/right/right.component';
import { PaisComponent } from './components/pais/pais.component';
import { PeruComponent } from './components/peru/peru.component';
import { PostComponent } from './components/post/post.component';
// servicios 
//import { PostService } from "./service/post.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    HeaderComponentsComponent,
    MenuComponent,
    DatosComponent,
    RightComponent,
    PaisComponent,
    PeruComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
