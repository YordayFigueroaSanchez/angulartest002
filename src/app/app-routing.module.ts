import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PageRoutingModule } from './pages/pages.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

  {path:'**', component:NotpagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
