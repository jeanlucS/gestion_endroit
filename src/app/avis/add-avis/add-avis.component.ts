import { Component, OnInit } from '@angular/core';
import { AvisService } from 'app/avis.service';
import { UtilisateursService } from 'app/utilisateurs.service';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';
import { Utilisateur } from 'app/utilisateur';
import { Avis } from 'app/avis';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-avis',
  templateUrl: './add-avis.component.html',
  styleUrls: ['./add-avis.component.css']
})
export class AddAvisComponent implements OnInit {

  constructor(
    private avsService: AvisService,
    private endtService: EndroitsService,
    private utiliService: UtilisateursService,
    private router: Router) { }
utilisateurs:any;
endroits: any;
model = new Avis();
  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.endtService.getEndroits().subscribe(endroit => {this.endroits = endroit; } );
    this.utiliService.getUtilisateurs().subscribe(utilisateur => { this.utilisateurs = utilisateur;
    }
    )
  }
  addAvis(){
      this.avsService
        .addAvis(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/avis']);
  }


}
