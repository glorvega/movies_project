import { MovieInterface, MovieInterfaceComplete } from "../movie/movie.interface";

export interface CompanyInterface {
    id: number;
    name: string;
    country: string;
    createYear: number;
    employees: number;
    rating: number;
    movies: number[];
}

export interface CompanyInterfaceComplete {
    id: number;
    name: string;
    country: string;
    createYear: number;
    employees: number;
    rating: number;
    movies: MovieInterface[];
}