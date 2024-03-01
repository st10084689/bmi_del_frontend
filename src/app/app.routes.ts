import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{
    path: '', component: LoginComponent
},
{
    path:'signup',component: SignupComponent
},
{
    path:'login',component: LoginComponent
},
];
