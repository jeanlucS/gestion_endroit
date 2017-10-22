import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'app/utilisateurs.service';
import { Utilisateur } from 'app/utilisateur';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(
    private _utilisateursService:UtilisateursService,
    private router: Router
   ) { }
  utilisateurs:any;
  ngOnInit() {
    this.getUtilisateurs();
  }
  getUtilisateurs(){
     this._utilisateursService
        .getUtilisateurs()
        .subscribe(utilisateur => {
          this.utilisateurs = utilisateur;
      } )
  }
  deleteUtilisateur(id){
      this._utilisateursService
        .deleteUtilisateur(id)
        .subscribe(() => {
        this.getUtilisateurs();
      } )
  }

}
