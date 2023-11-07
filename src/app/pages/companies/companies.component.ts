import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { CompanyInterface } from 'src/app/core/services/company/company.interface';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  public companies$!: Observable<CompanyInterface[]>;

  constructor(
    private service: CompanyService,
  ) { }

  ngOnInit() {
    /* this.companies$ = this.service.getCompanies();
    console.log(this.companies$); */

  }

}
