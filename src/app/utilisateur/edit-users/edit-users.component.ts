import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { UtilisateursService } from 'app/utilisateurs.service';
import { Utilisateur } from 'app/utilisateur';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

    constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utService: UtilisateursService
  ) { }

  ngOnInit() {
      this.getSingleUtilisateur();
  }
  model = new Utilisateur();
  id = this.route.snapshot.params['id'];
  getSingleUtilisateur(){
    this.utService
      .getUtilisateur(this.id)
      .subscribe(utilisateur =>{
          this.model = utilisateur[0];
        })
  };
  updateUtilisateur(){
      this.utService
        .updateUtilisateur(this.model)
        .subscribe(() => this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }

}
