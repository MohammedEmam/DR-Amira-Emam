import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { ServicesComponent } from './Components/services/services.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { BlogsContent1Component } from './Components/blogs-content1/blogs-content1.component';
import { BlogsContent2Component } from './Components/blogs-content2/blogs-content2.component';
import { BlogsContent3Component } from './Components/blogs-content3/blogs-content3.component';
import { AllServicesComponent } from './all-services/all-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ServicesComponent,
    FeedbackComponent,
    BlogsComponent,
    AboutComponent,
    ContactComponent,
    TestimonialsComponent,
    BlogsContent1Component,
    BlogsContent2Component,
    BlogsContent3Component,
    AllServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
