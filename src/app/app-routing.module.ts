import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './layout/products/all-products';
import { NotFoundComponent } from './layout/not-found/not-found';
import { HomeComponent } from './layout/home/home';
import { SignupComponent } from './layout/auth/signup/signup';
import { LoginComponent } from './layout/auth/login/login';
import { MyAccountComponent } from './layout/account/my-account';
import { AuthGuard } from './layout/auth/auth.guard';
import { NewProductComponent } from './layout/admin/new-product/new-product';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'account',
    component: MyAccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-new-product',
    component: NewProductComponent
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
