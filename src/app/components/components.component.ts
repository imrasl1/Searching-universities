import { Component, OnInit } from '@angular/core';
import { RootUniversities } from '../models/university.models';
import { UniversityServiceService } from 'src/app/services/university-service.service';
import { Root2, RootCountries } from '../models/coutries.model';
import { empty, isEmpty } from 'rxjs';


@Component({
  selector: 'app-universities',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit{
  public countryName : string = ""
  public resultCountries!: RootCountries;
  public resultUniversities!: RootUniversities;
  public searchText : string = "";
  public knopka: boolean = false;
  constructor (private service: UniversityServiceService) {}
  async ngOnInit() {
    this.resultCountries = await this.service.getCountries() as RootCountries
    this.sortingBox()
  }

  async onClick () {
    if (this.countryName.length!==0) {
      this.resultUniversities = await this.service.getUniversities(this.countryName)
      this.resultUniversities = this.resultUniversities.filter(a => a.name.includes(this.searchText))
    }
    this.knopka = true
  }

  sortingBox () {
    this.resultCountries.sort((a, b) => {return a.name.common.localeCompare(b.name.common)})
  }
}
