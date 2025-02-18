import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  @Output() thirdStepDone = new EventEmitter<void>();

  submitted(){
    this.thirdStepDone.emit();
  }
}
