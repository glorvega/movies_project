import { MovieInterface } from "../movie/movie.interface";

export interface ActorInterface {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    bornCity: string;
    birthdate: string;
    img: string;
    rating: number;
    movies: number[];
    nombre_completo: string;
}
export interface ActorInterfaceComplete {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    bornCity: string;
    birthdate: string;
    img: string;
    rating: number;
    movies: MovieInterface[];
    nombre_completo: string;
}