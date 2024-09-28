import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BlogsContent1Component } from './Components/blogs-content1/blogs-content1.component';
import { BlogsContent2Component } from './Components/blogs-content2/blogs-content2.component';
import { BlogsContent3Component } from './Components/blogs-content3/blogs-content3.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'allservices', component: AllServicesComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'test', component: TestimonialsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog1', component: BlogsContent1Component },
  { path: 'blog2', component: BlogsContent2Component },
  { path: 'blog3', component: BlogsContent3Component },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
