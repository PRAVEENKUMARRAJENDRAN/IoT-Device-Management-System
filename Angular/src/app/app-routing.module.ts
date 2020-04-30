import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { AngmapComponent } from './angmap/angmap.component';
import { TreeComponent } from './tree/tree.component';
import { HeadComponent } from './head/head.component';
import { MetaComponent } from './meta/meta.component';
import { FaultComponent } from './fault/fault.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DelComponent } from './del/del.component';
import { TesttreeComponent } from './testtree/testtree.component';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
  { path: 'dash', component: DashComponent },
  { path: 'meta', component: MetaComponent },
  { path: 'add', component: AddComponent },
  { path: 'del', component: DelComponent },
  { path: 'edit', component: EditComponent },
  { path: 'fault', component: FaultComponent },
  { path: 'test', component: TestComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'head', component: HeadComponent },
  { path: 'map', component: AngmapComponent },
  { path: 'testree', component: TesttreeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


