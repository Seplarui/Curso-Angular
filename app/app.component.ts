import { Component } from "angular2/core";
import { PeliculasListComponent } from "./components/peliculas-list.component";
import {PeliculasFooterComponent } from "./components/peliculas-footer.component";
@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    directives:[PeliculasListComponent, PeliculasFooterComponent]
    
})

    //Crear componente

export class AppComponent{

    public titulo: string = "Peliculas con Angular 2";
   
}