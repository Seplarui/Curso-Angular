import { Component } from "angular2/core";
import { Pelicula } from "./../model/pelicula";

@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html",
})

//Crear componente

export class PeliculasListComponent{
    public pelicula: Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos: boolean;
    public peliculas;

    constructor() {
        this.mostrarDatos = false;


        this.peliculas = [

            new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
            new Pelicula(2, "La verdad duele", "Will Smith", 2016),
            new Pelicula(3, "El señor de los anillos", "Desconocido", 2002),
            new Pelicula(4, "Una historia Real", "Zack Snider", 2015),
            new Pelicula(5, "Don Jon", "Zack Snider", 2004)
        ];
        this.peliculaElegida = this.peliculas[0];
        this.pelicula = this.peliculas[0];

        this.debug();


    }

    debug(titulo = null) {
        if (titulo != null) {

            console.log(this.pelicula);

        } else {
            console.log(this.pelicula.titulo);
        }


    }

    onShowHide(value) {
        this.mostrarDatos = value;
    }

    onCambiarPelicula(pelicula) {

        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    }


}
