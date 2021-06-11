import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateListRoutingModule } from './candidate-list-routing.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';


@NgModule({
  declarations: [CandidateListComponent],
  imports: [
    CommonModule,
    CandidateListRoutingModule
  ]
})
export class CandidateListModule { }
