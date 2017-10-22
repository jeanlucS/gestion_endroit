import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AvisService } from 'app/avis.service';
import { UtilisateursService } from 'app/utilisateurs.service';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';
import { Utilisateur } from 'app/utilisateur';
import { Avis } from 'app/avis';

@Component({
  selector: 'app-edit-avis',
  templateUrl: './edit-avis.component.html',
  styleUrls: ['./edit-avis.component.css']
})
export class EditAvisComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private avsService: AvisService,
    private endtService: EndroitsService,
    private utiliService: UtilisateursService,
  ) { }

  ngOnInit() {
      this.getSingleAvis();
    this.endtService.getEndroits().subscribe(endroit => {this.endroits = endroit; } );
    this.utiliService.getUtilisateurs().subscribe(utilisateur => { this.utilisateurs = utilisateur;
    }
    )
  }
  utilisateurs:any;
  endroits: any;
  model = new Avis();
  id = this.route.snapshot.params['id'];
  getSingleAvis(){
    this.avsService
      .getAvis(this.id)
      .subscribe(utilisateur =>{
          this.model = utilisateur[0];
        })
  };
  updateAvis(){
      this.avsService
        .updateAvis(this.model)
        .subscribe(() => this.goBack());
  }
   goBack(){
    this.router.navigate(['/avis']);
  }

}
