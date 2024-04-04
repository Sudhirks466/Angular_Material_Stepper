import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperLayoutComponent } from './stepper-layout/stepper-layout.component';

const routes: Routes = [
  {
    path: '',
    component: StepperLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
