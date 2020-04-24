import { NotFoundComponent } from './layout/not-found/not-found.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
