import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CancelComponent } from './cancel/cancel.component';
import { DeluxeComponent } from './deluxe/deluxe.component';
import { PremiumComponent } from './premium/premium.component';
import { ExecutiveComponent } from './executive/executive.component';
import { BooknowComponent } from './booknow/booknow.component';
import{HttpModule,Http}from '@angular/http';
import{FormsModule,ReactiveFormsModule,Validators,}from'@angular/forms'
import{List} from './list';
import { PromocodeComponent } from './promocode/promocode.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ReviewComponent } from './review/review.component';


const rou:Routes=[
  {
    path:'',
    component:HomeComponent
    
    },{path:'rooms',
    component:RoomsComponent
    },{path:'gallery',
    component:GalleryComponent
    },
    {
      path:'cancel',
      component:CancelComponent
    }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    RoomsComponent,
    CancelComponent,
    DeluxeComponent,
    PremiumComponent,
    ExecutiveComponent,
    BooknowComponent,
    PromocodeComponent,
    UserdetailsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rou)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
