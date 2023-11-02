import { Component } from '@angular/core';
import { CompanyInterface } from 'src/app/core/services/company/company.interface';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
public companies!: CompanyInterface[];
}
