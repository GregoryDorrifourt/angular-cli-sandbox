import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadComponent } from '../dad/dad.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: 'form',
    component: DadComponent
  },
  {
    path: '',
    component: HomeComponent,
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