import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  input_value;


  @Input() lable_name;
  @Output() outputdata=new EventEmitter();
  
  constructor() { }
  datafromInput(){
    this.outputdata.emit(this.input_value);
    }
    
  ngOnInit() {
  }

}
