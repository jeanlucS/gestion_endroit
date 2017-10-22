import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'app/utilisateurs.service';
import { Utilisateur } from 'app/utilisateur';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(
    private utilService: UtilisateursService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Utilisateur();

  addUtilisateur(){
      this.utilService
        .addUtilisateurs(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
