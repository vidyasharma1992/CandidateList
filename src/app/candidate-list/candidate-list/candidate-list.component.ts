import { ICandidate } from './../../helpers/model/candidate';
import { Component } from '@angular/core';
import { CANDIDATERESPONSE } from './../../helpers/data/candidate-response';
import { Helper } from 'src/app/helpers/helper';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent {
  candidateList: ICandidate[] = [];
  isNameSorted = false;
  isDateSorted = false;
  distinctDetails: { departmentName: string, count: number }[] = [];
  constructor() {
    this.candidateList = CANDIDATERESPONSE;
  }
  searchCandidate(name: string) {
    this.candidateList = CANDIDATERESPONSE.filter(e =>
      e.name.toLowerCase()
        .includes(name.trim().toLowerCase()))
  }

  getCandidateWithExp() {
    const expLimit = 2;
    this.candidateList = CANDIDATERESPONSE.filter(e =>
      Helper.GetYearDifference(new Date(e.joining_date),
        new Date()) >= expLimit);
  }

  refreshCandidateList() {
    this.candidateList = CANDIDATERESPONSE;
  }

  removeCandidates() {
    const departmentTobeRemoved = 'Development';
    this.candidateList = CANDIDATERESPONSE.filter(e =>
      e.department !== departmentTobeRemoved);
  }

  getDistinctDep() {
    var result = [];
    CANDIDATERESPONSE.reduce((res, value) => {
      if (!res[value.department]) {
        res[value.department] = {
          count: 0,
          departmentName: value.department
        };
        result.push(res[value.department])
      }
      res[value.department].count += 1
      return res;
    }, {});
    this.distinctDetails = result;
  }

  sortCandidates(sortedOn: string) {
    if (sortedOn === "name") {
      this.candidateList = this.candidateList.sort((a, b) =>
        this.isNameSorted ?
          a.name < b.name ? 1 : -1 :
          a.name > b.name ? 1 : -1
      );
      this.isNameSorted = !this.isNameSorted;
    }
    else if (sortedOn === "date") {
      this.candidateList = this.candidateList.sort((a, b) =>
        this.isDateSorted ?
          (new Date(a.joining_date)).getTime() - (new Date(b.joining_date)).getTime() :
          (new Date(b.joining_date)).getTime() - (new Date(a.joining_date)).getTime()
      );
      this.isDateSorted = !this.isDateSorted;
    }
  }

}
