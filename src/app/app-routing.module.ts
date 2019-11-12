import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';
import { NewsDisplayComponent } from './news-display/news-display.component';
import { NewsUpdateComponent } from './news-update/news-update.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'', component : IndexComponent},
  {path:'news', component : NewsComponent},
  {path:'newsdisplay', component : NewsDisplayComponent},
  {path:'newsupdate/:id', component : NewsUpdateComponent},
  {path:'register', component : RegisterComponent},
  {path:'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
