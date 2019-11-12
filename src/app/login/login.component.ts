import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
password;
access_token ;
  constructor(private apiService: ApiService,private router:Router,private toastr: ToastrService) { }
   
  ngOnInit() {
      
  }
  
  login(userdata){ 
    console.log(userdata);
    this.email = userdata['email'];
    this.password= userdata['password'];
    // User data which we have received from the registration form.
    this.apiService.login(this.email,this.password).subscribe((reponse)=>{
      console.log(reponse);
       this.access_token = reponse['access_token'];
    
      
      // if(this.access_token !== null){

      // }else
      
        
      if(localStorage.getItem('access_token') == this.access_token || this.access_token !== false){
        
          this.router.navigate(['']);
          this.toastr.success('login success!');
      }else{
          this.toastr.error('email or password is wrong !');
          this.router.navigate(['login']);
        
      }
     
    
      // if( this.access_token !== false){
      //   this.router.navigate(['login']);
      //   console.log("email or password is wrong !");
      // }
       
     }); 
  }

  

}
