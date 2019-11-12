import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private apiService: ApiService,private router: Router,private toastr: ToastrService) {
      if(localStorage.getItem('access_token') !==  null){
        this.router.navigate(['news']);
    }else{
        this.router.navigate(['login']);
    }
   }

  ngOnInit() {
  }
  News(userdata){ 
    console.log(userdata);
    // User data which we have received from the registration form.
    this.apiService.News(userdata).subscribe((reponse)=>{
      console.log(reponse);
      this.router.navigate(['newsdisplay']);
      this.toastr.success('News create successfull!');
     });  
  }

}
