import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDDiplomasComponent } from './components/add-ddiplomas/add-ddiplomas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'NewDiploma',component:AddDDiplomasComponent},
  { path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
