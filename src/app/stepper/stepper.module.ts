import { NgModule, forwardRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { MaterialModule } from '../material/material.module';
import { StepperLayoutComponent } from './stepper-layout/stepper-layout.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@NgModule({
  declarations: [
    StepperLayoutComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component
  ],
  imports: [
    CommonModule,
    StepperRoutingModule,
    MaterialModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Form1Component),
      multi: true,
    },
  ],
})
export class StepperModule { }
