import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddUsersComponent } from './utilisateur/add-users/add-users.component';
import { EditUsersComponent } from './utilisateur/edit-users/edit-users.component';
import { ListUsersComponent } from './utilisateur/list-users/list-users.component';
import { AddEndroitComponent } from './endroit/add-endroit/add-endroit.component';
import { EditEndroitComponent } from './endroit/edit-endroit/edit-endroit.component';
import { ListEndroitComponent } from './endroit/list-endroit/list-endroit.component';
import { AddAvisComponent } from './avis/add-avis/add-avis.component';
import { EditAvisComponent } from './avis/edit-avis/edit-avis.component';
import { ListAvisComponent } from './avis/list-avis/list-avis.component';
import { UtilisateursService } from './utilisateurs.service';
import { EndroitsService } from './endroits.service';
import { AvisService } from './avis.service';
import { NavbarComponent } from './utilisateur/navbar/navbar.component';
import { ShowComponent } from './utilisateur/show/show.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ShowEndroitComponent } from './endroit/show-endroit/show-endroit.component';
import { ShowAvisComponent } from './avis/show-avis/show-avis.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    EditUsersComponent,
    ListUsersComponent,
    AddEndroitComponent,
    EditEndroitComponent,
    ListEndroitComponent,
    AddAvisComponent,
    EditAvisComponent,
    ListAvisComponent,
    NavbarComponent,
    ShowComponent,
    ShowEndroitComponent,
    ShowAvisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UtilisateursService,
  EndroitsService,
  AvisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
