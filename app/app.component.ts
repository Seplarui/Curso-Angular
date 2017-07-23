import { Component } from "angular2/core";
import { Pelicula } from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    styleUrls:["../assets/css/styles.css"]
})

    //Crear componente

export class AppComponent{

    public titulo: string = "Peliculas con Angular 2";
    public pelicula: Pelicula;
    public mostrarDatos: boolean;
    public peliculas:Array<string>;

    constructor() {
        this.mostrarDatos = false;


        this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);
        this.peliculas = [

            new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
            new Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new Pelicula(3, "El señor de los anillos", "Desconocido", ),
            new Pelicula(4, "Una historia Real", "Zack Snider", 2016),
            new Pelicula(5, "Don Jon", "Zack Snider", ),
        ];

        this.debug();

   
    }

    debug(titulo = null) {
        if (titulo!=null) {

            console.log(this.pelicula);

        } else {
            console.log(this.pelicula.titulo);
        }

        
    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }


}