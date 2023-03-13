import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // login group 

  loginForm = this.fb.group({
    // array 
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })


  constructor(private fb:FormBuilder , private api:ApiService , private router: Router ){

  }



  login(){

    
    if(this.loginForm.valid)
    {

       
        let email = this.loginForm.value.email;
        let pswd = this.loginForm.value.pswd;
        // login api call 
        this.api.login(email,pswd)
        .subscribe((result:any)=>{
         
          // this.router.navigateByUrl('/lists')
          this.router.navigateByUrl(`/${result._id}/lists`);

          


        },
        (result)=>{
          alert(result.error.message)
        })

    }
    else{
      alert('Invalid form')
    }

  }




}
