import {Component} from "angular2/core";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html"   
})

    //Crear componente

export class AppComponent{

    public titulo:string = "Peliculas con Angular 2";
    public pelicula:string;
    public director: string; 
    public anyo: number;

    constructor() {
        this.pelicula = "Batman vs Superman";
        this.director = "Zack Snider";
        this.anyo = 2016
        this.holaMundo();
    }

    holaMundo() {
        alert("Pelicula: " + this.pelicula + " - " + this.director + " - " + this.anyo);
    }

}