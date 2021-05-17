import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { LandingPageComponent } from './landing-page/landing-page.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {HomeComponent} from './home/home.component';
import {SecFooterComponent} from './secondary/footer/sec-footer/sec-footer.component';
import { SecHeaderComponent } from './secondary/header/sec-header/sec-header.component';
import {ViewComponent} from './view/view.component';
import { UserLoginGuard } from './services/login/user-login.guard';
import { AdminGuardGuard } from './services/admin-login/admin-guard.guard';
import {GoogleLoginGuardGuard} from './services/google-login-guard.guard'
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import {BlogsComponent} from './user-dashboard/blogs/blogs.component';
import { AdminSettingComponent} from './admin-setting/admin-setting.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { AboutComponent } from './about/about.component';
import { VerificationComponent } from './verification/verification.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CountViewComponent } from './count-view/count-view.component';
import { AdminHeaderComponent } from './secondary/admin-header/admin-header.component';
import { UserHeaderComponent } from './secondary/user-header/user-header.component';
import { GoogleUserDashboardComponent } from './google-user-dashboard/google-user-dashboard.component';
const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'Admin-header', component:AdminHeaderComponent},
  {path: 'User-header', component:UserHeaderComponent},
  {path: 'admin/dashboard/messages', component:MessageComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'forgotPassword/reset-password', component: ResetPasswordComponent},
  {path: 'view-count', component: CountViewComponent},
  {path: 'user-dashboard/profile', component: ProfileComponent, canActivate: [UserLoginGuard]},
  {path: 'user/proxy-user-dashboard', component: GoogleUserDashboardComponent,canActivate: [GoogleLoginGuardGuard] },
  {path: 'chat', component: ChatComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'user-dashboard', component:UserDashboardComponent, canActivate: [UserLoginGuard]},
  {path: 'admin/login', component:AdminComponent},
  {path: 'tab/coronavirus', component:CoronavirusComponent},
  {path: 'tab/news', component:NewsComponent},
  {path: 'tab/entertainment', component:EntertainmentComponent},
  {path: 'tab/politics', component:PoliticsComponent},
  {path: 'tab/sports', component:SportsComponent},
  {path: 'tab/technology', component:TechnologyComponent},
  {path: '404', component:NotFoundPageComponent},
  {path: 'admin/dashboard', component:DashboardComponent,canActivate:[AdminGuardGuard]},
  {path: 'admin/dashboard/table', component:TableComponent,canActivate:[AdminGuardGuard]},
  {path: 'admin/dashboard/home', component:HomeComponent,canActivate:[AdminGuardGuard]},
  {path: 'sec-footer', component:SecFooterComponent},
  {path: 'sec-header', component:SecHeaderComponent},
  {path: 'admin/table/view/:id', component:ViewComponent,canActivate:[AdminGuardGuard]},
  {path: 'category', component:CategoryComponent},
  {path: 'subcategory', component:SubcategoryComponent},
  {path: 'admin/blogs', component:BlogsComponent, canActivate:[AdminGuardGuard]},
  {path: 'admin-setting', component:AdminSettingComponent, canActivate:[AdminGuardGuard]},
  {path: 'admin-password-reset', component:AdminPasswordResetComponent, canActivate: [AdminGuardGuard]},
  {path: 'betaBlogs/about', component:AboutComponent},
  {path: 'verification', component:VerificationComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
