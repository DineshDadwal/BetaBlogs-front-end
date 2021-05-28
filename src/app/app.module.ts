import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecFooterComponent } from './secondary/footer/sec-footer/sec-footer.component';
import { SecHeaderComponent } from './secondary/header/sec-header/sec-header.component';
import { ViewComponent } from './view/view.component';

// Angular material
import { MatSliderModule } from '@angular/material/slider';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogsComponent } from './user-dashboard/blogs/blogs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { AboutComponent } from './about/about.component';
import { VerificationComponent } from './verification/verification.component';
import { MessageComponent } from './message/message.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ChatComponent } from './chat/chat.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProfileComponent } from './profile/profile.component';
import { CountViewComponent } from './count-view/count-view.component';
import { AdminHeaderComponent } from './secondary/admin-header/admin-header.component';
import { UserHeaderComponent } from './secondary/user-header/user-header.component';
import { GoogleUserDashboardComponent } from './google-user-dashboard/google-user-dashboard.component';
import { SpecificBlogComponent } from './specific-blog/specific-blog.component';

// import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angular4-social-login';
// import {AuthServiceConfig} from  'angular-6-social-login'

// const google_oauth_client_id: string = "659014617128-6e6fb4s9al04e15ldtb2knhmkg3j114e.apps.googleusercontent.com"

// let config = new AuthServiceConfig([
//   {
//     id:GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider(google_oauth_client_id)
//   }
// ])
// end
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminComponent,
    CoronavirusComponent,
    NewsComponent,
    EntertainmentComponent,
    PoliticsComponent,
    SportsComponent,
    TechnologyComponent,
    DashboardComponent,
    TableComponent,
    HomeComponent,
    SecFooterComponent,
    SecHeaderComponent,
    ViewComponent,
    CategoryComponent,
    SubcategoryComponent,
    BlogsComponent,
    ForgotPasswordComponent,
    AdminSettingComponent,
    AdminPasswordResetComponent,
    AboutComponent,
    VerificationComponent,
    MessageComponent,
    ChatComponent,
    ResetPasswordComponent,
    NotFoundPageComponent,
    ProfileComponent,
    CountViewComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    GoogleUserDashboardComponent,
    SpecificBlogComponent
    
    // dgs
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatSidenavModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ChartsModule,
    AngularEditorModule,
    MatPaginatorModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
    // SocialLoginModule.initialize(config)

    
    

  ],
  providers: [
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    NgxPaginationModule
    // SocialLoginModule

  ]
})
export class DemoMaterialModule {}