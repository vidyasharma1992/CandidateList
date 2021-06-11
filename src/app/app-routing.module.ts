import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'candidates',
    loadChildren: () => import('./candidate-list/candidate-list.module').then(m => m.CandidateListModule)
  },
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
