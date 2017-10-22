import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { UtilisateursService } from 'app/utilisateurs.service';
import { Utilisateur } from 'app/utilisateur';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilisateursService: UtilisateursService
  ) { }

  ngOnInit() {
    this.getSingleUtilisateur();
  }
  // tslint:disable-next-line:member-ordering
  utilisateur: Utilisateur;
  getSingleUtilisateur(){
    var id = this.route.snapshot.params['id'];
    this.utilisateursService
      .getUtilisateur(id)
      .subscribe(utilisateur =>{
          this.utilisateur = utilisateur[0];
          })
  };

  goBack(){
    this.router.navigate(['/home']);
  }

}
