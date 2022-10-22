import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotLoggedInGuard } from '../../core/guards/login/notloggedin/notloggedin.guard';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [],
    component: LoginPageComponent,
  },
  {
    path: 'register',
    canActivate: [],
    component: RegisterPageComponent,
  },
  {path:'**',
  redirectTo:'login',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
