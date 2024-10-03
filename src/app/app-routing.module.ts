import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExbaseComponent } from './exbase/exbase.component';
import { InbaseComponent } from './inbase/inbase.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'reg', component: InbaseComponent, loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
