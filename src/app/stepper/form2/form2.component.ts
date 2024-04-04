import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  @Input() data: any = "";
  @Output() secondStepDone = new EventEmitter<void>();

  submitted(){
    this.secondStepDone.emit();
  }
}
