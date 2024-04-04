import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.css']
})
export class StepperLayoutComponent implements OnInit {

  isLinear = true;
  selectedIndex: number = 0;
  showMessage: boolean = false;
  editable: boolean = false;

  @ViewChild('stepper') stepper: any = MatStepper;

  parentData: any = 'Data from parent component';

  previousStepCompleted = false; // Track the completion status of the previous step
  isCheckingPreviousStep = false; // Track if we are currently checking the previous step

  firstForm = this.fb.group({
    isRequired: ["", Validators.required],
  });

  secondForm = this.fb.group({
    isRequired: ["", Validators.required],
  })

  thirdForm = this.fb.group({
    isRequired: ["", Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.parentData = "Data from parent component";
    // Subscribe to the selectionChange event of the stepper
    // this.stepper.selectionChange.subscribe((step: any) => {
    //   if (step.previouslySelectedIndex < step.selectedIndex) {
    //     // If moving forward (next step), check if the previous step is completed
    //     this.checkPreviousStepCompletion(step.previouslySelectedIndex);
    //   }
    // });
  }

  isfirstStepDone() {
    this.firstForm.patchValue({
      isRequired: "DONE"
    })
    this.stepper.next(1);
  }
  isSecondStepDone() {
    console.log("isSecondStepDone")
    this.secondForm.patchValue({
      isRequired: "DONE"
    })
    this.stepper.next(2);
  }
  isThirdStepDone() {
    console.log("isThirdStepDone")
    this.thirdForm.patchValue({
      isRequired: "DONE"
    })
    this.editable = true;
    this.isLinear = false;
    this.stepper.next(3);
  }

  isFourthStepDone() {
    console.log("isFourthStepDone")
  }
  isFifthStepDone() {
    console.log("isFifthStepDone")
  }

  onFunctionCallFromForm1() {
    // this.isLinear = false;
    // this.selectedIndex = 1;
    this.showMessage = true;
  }

  testChangeStepper() {
    // this.selectedIndex = 1;
    this.stepper.next(4); // Check if stepper is defined before calling next
    console.log("goToStep2 called")
  }

  onStepSelectionChange(event: any) {
    this.selectedIndex = event.selectedIndex;
  }
  
  isEditable() {
    this.editable = !this.editable;
    console.log(this.editable)
  }

  nextStep() {
    this.stepper.next();
  }

  previousStep() {
    this.stepper.previous();
  }

  goToStep(step: number) {
    this.stepper.selectedIndex = step;
  }
}
