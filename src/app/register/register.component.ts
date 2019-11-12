import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService,private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }
  register(userdata){ 
    console.log(userdata);
    // User data which we have received from the registration form.
    this.apiService.register(userdata).subscribe((reponse)=>{
      // console.log(reponse);
      this.router.navigate(['login']);
      this.toastr.success('Rgister successfull!');
     }); 
  }

}
