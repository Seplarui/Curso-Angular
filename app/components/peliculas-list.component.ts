import { Component } from "angular2/core";
import { Pelicula } from "./../model/pelicula";
import { PeliculasService } from "../services/peliculas.service";
@Component({
    selector: "peliculas-list",
    templateUrl: "app/view/peliculas-list.html",
    providers: [PeliculasService]
})

//Crear componente

export class PeliculasListComponent{
    public pelicula: Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos: boolean;
    public peliculas;
    public datoServicio;


    constructor(private _peliculasService: PeliculasService) {

        this.mostrarDatos = false;
        this.peliculas = this._peliculasService.getPeliculas();
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
