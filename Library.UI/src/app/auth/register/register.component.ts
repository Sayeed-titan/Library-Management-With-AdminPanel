import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
     hidePwdContent: boolean = true;
    registerForm: FormGroup;

   constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      firstName: formBuilder.control('', Validators.required),
      lastName: formBuilder.control('', Validators.required),
      email: formBuilder.control('', Validators.required),
      mobileNumber: formBuilder.control('', Validators.required),
      password: formBuilder.control('', Validators.required),
      repeatPassword: formBuilder.control('', Validators.required)

    })
   }


   register(){
    let user ={
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      mobileNumber: this.registerForm.get('mobileNumber')?.value,
      password: this.registerForm.get('password')?.value,
    }
   }
}
