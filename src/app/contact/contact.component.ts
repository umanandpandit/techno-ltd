import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ROUTER_CONFIGURATION } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  messageForm : FormGroup;
  submitted = false; // flag for successful submition
  sucess = false;  // flag for validation

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){

    this.messageForm = this.formBuilder.group({
      name: ['',Validators.required],
      message: ['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }

    this.sucess = true;
  }

}
