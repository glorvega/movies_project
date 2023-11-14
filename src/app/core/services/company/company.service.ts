import { MovieInterface } from './../movie/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { CompanyInterface, CompanyInterfaceComplete } from './company.interface';
import { Observable, forkJoin, from, map, mergeMap, switchMap, toArray } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    constructor(
        private apiService: ApiService
    ) { }

    getCompaniesWithMovies(): Observable<CompanyInterfaceComplete[]> {
        return forkJoin({
            companies: this.apiService.getCompanies(),
            movies: this.apiService.getMovies()
        }).pipe(
            map(({ companies, movies }) => {
                return companies.map(company => {
                    const moviesForCompany = company.movies.map(movieId =>
                        movies.find(movie => movie.id === movieId)
                    );

                    const companyWithMovies: CompanyInterfaceComplete = {
                        ...company,
                        movies: moviesForCompany as MovieInterface[]
                    };

                    return companyWithMovies;
                });
            })
        );
    }
}