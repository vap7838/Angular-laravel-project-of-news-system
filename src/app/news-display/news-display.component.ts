import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-news-display',
  templateUrl: './news-display.component.html',
  styleUrls: ['./news-display.component.css']
})
export class NewsDisplayComponent implements OnInit {
  articles;
  constructor(private apiService: ApiService,private router: Router) { 
    if(localStorage.getItem('access_token') !==  null){
      this.router.navigate(['newsdisplay']);
    }else{
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data;
    });
  }

  getNewsdelete(id){
      this.apiService.getNewsdelete(id).subscribe(
        Response=>{
          console.log("delete successfull !");
            location.reload();
          
        },
        error => {
          console.log("error ....... in delete >>>>...");
        }
      )
  }

}
