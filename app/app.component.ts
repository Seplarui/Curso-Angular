import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    template: `<h1>{{titulo}}</h1>
                <ul>
                <li>Titulo: {{pelicula}}</li>
                <li>Director: {{director}}</li>
                <li>Año: {{anyo}}</li>
                </ul>
`
})

    //Crear componente

export class AppComponent{

    public titulo = "Peliculas con Angular 2";
    pelicula = "Batman vs Superman";
    director = "Zack Snider";
    anyo = "2016";

}