import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/stepper', pathMatch: 'full' }, 
  { path:'stepper', loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
