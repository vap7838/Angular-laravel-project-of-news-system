import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
  articles;
  constructor(private apiService: ApiService,private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe(id =>this.getEditNews(id['id']))
  }

  ngOnInit() {
   
  }
  getEditNews(id){
    console.log(id);
    this.apiService.getEditNews(id).subscribe((data)=>{
      console.log(data);
      this.articles = data;
    });
  }

  Newsupdate(userdata,id){ 
    console.log(userdata,id);
    // User data which we have received from the registration form.
    this.apiService.Newsupdate(userdata,id).subscribe((reponse)=>{
      console.log(reponse+"update successfull!");
      this.router.navigate(['newsdisplay']);
     }); 
  }

}
