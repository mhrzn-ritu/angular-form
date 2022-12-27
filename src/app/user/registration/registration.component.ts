import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private fb : FormBuilder) { 
    this.registerForm = this.fb.group({
      email:[null, [Validators.required, Validators.maxLength(150)]],
      password:[null, [Validators.required, Validators.maxLength(150)]],
      username:[null, [Validators.required, Validators.maxLength(150)]]
    });
  }

  ngOnInit() {
  }
  create(event){
    console.log("form value ",JSON.stringify(this.registerForm.value));
  }

}