import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadComponent } from '../dad/dad.component';
import { PlansWallComponent } from '../plans-wall/plans-wall.component';
import { HomeComponent } from '../home/home.component';
import { FaiResultsComponent } from "../fai-results/fai-results.component";

const routes: Routes = [
  {
    path: 'fai-results',
    component: FaiResultsComponent
  },
  {
    path: 'plans-wall',
    component: PlansWallComponent
  },
  {
    path: 'form',
    component: DadComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }