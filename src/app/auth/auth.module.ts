import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';



@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent,
    RegisterPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
