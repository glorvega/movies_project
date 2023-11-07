import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService
        ){}

        getCompanies(){
            return this.apiService.getCompanies()
         }
}