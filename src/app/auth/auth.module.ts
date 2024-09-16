import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule

  ]
})
export class AuthModule { }
