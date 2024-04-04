import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  @Output() functionCallEvent = new EventEmitter<void>();
  @Output() gotToSetp2 = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  @Output() firstStepDone = new EventEmitter<void>();

  form1: any = FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form1 = this.fb.group({
      isRequired: ['', Validators.required], 
    })
  }
  
  callFunctionInLayout() {
    this.functionCallEvent.emit();
  }

  goToStep2() {
    this.next.emit();
  }

  submitted(){
    this.firstStepDone.emit();
  }

}
