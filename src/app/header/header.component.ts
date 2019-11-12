import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  access_token;
  constructor(private apiService: ApiService,private router:Router) { 
  
  }
  
  ngOnInit(){
    this.access_token = localStorage.getItem('access_token');
  }

  onClick(logout: Event): void {
    // Prevents browser following the link
    this.apiService.logout();
    this.router.navigate(['login']);
}


 
}
