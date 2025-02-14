import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserChatbotComponent } from './user-chatbot/user-chatbot.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'user-chatbot',
    component:UserChatbotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatIconModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
