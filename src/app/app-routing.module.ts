import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AddUsersComponent } from './utilisateur/add-users/add-users.component';
import { EditUsersComponent } from './utilisateur/edit-users/edit-users.component';
import { ListUsersComponent } from './utilisateur/list-users/list-users.component';
import { AddEndroitComponent } from './endroit/add-endroit/add-endroit.component';
import { EditEndroitComponent } from './endroit/edit-endroit/edit-endroit.component';
import { ListEndroitComponent } from './endroit/list-endroit/list-endroit.component';
import { AddAvisComponent } from './avis/add-avis/add-avis.component';
import { EditAvisComponent } from './avis/edit-avis/edit-avis.component';
import { ListAvisComponent } from './avis/list-avis/list-avis.component';
import { ShowComponent } from './utilisateur/show/show.component';
import { ShowEndroitComponent } from './endroit/show-endroit/show-endroit.component';
import { ShowAvisComponent } from './avis/show-avis/show-avis.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: ListUsersComponent},
  {path:"add", component: AddUsersComponent},
  {path:"show/:id", component: ShowComponent},
  {path:"edit-user/:id", component: EditUsersComponent},
  {path:"endroit", component: ListEndroitComponent},
  {path:"add-endroit", component: AddEndroitComponent},
  {path:"edit-endroit/:id", component: EditEndroitComponent},
  {path:"show-endroit/:id", component: ShowEndroitComponent},
  {path:"avis", component: ListAvisComponent},
  {path:"show-avis/:id", component: ShowAvisComponent},
  {path:"edit-avis/:id", component: EditAvisComponent},
  {path:"add-avis", component: AddAvisComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
