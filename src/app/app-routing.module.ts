import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [
  

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

  {path:'**', component:NotpagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
