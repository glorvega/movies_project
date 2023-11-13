import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { CompanyInterface } from 'src/app/core/services/company/company.interface';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { DataCardInterface } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  public companies$!: Observable<DataCardInterface[]>;

  constructor(
    private service: CompanyService,
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.service.getCompaniesWithMovies().pipe(
      map((companies) => {
        return companies.map((company) => ({
          id: company.id,
          name: company.name,
          createYear: company.createYear,
          country: company.country,
          employees: company.employees,
          rating: company.rating,
          movies: company.movies
        }))
      })

    )
    console.log(this.companies$);

  }
}
