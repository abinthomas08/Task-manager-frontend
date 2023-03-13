import { Component } from '@angular/core';
import {FormBuilder, Validators}  from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  registerForm = this.fb.group({
    //array 
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

  })



  constructor(private fb: FormBuilder , private api: ApiService ,private router:Router){

  }
  register(){
    if(this.registerForm.valid)
    {

       
        let email = this.registerForm.value.email;
        let pswd = this.registerForm.value.pswd;
        let name = this.registerForm.value.name;
        this.api.register(name,email,pswd)
        .subscribe((result:any)=>{
          alert(result.message)
          // navigate login 
          this.router.navigateByUrl('')
        },
        (result:any)=>{
          alert(result.error.message)
        }
        )

    }
    else{
      alert('Invalid form')
    }

  }




}
