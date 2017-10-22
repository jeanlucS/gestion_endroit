import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AvisService } from 'app/avis.service';
import { Avis } from 'app/avis';

@Component({
  selector: 'app-show-avis',
  templateUrl: './show-avis.component.html',
  styleUrls: ['./show-avis.component.css']
})
export class ShowAvisComponent implements OnInit {

   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private avsService: AvisService
  ) { }

  ngOnInit() {
    this.getSingleUtilisateur();
  }
  // tslint:disable-next-line:member-ordering
  avis: Avis;
  getSingleUtilisateur(){
    var id = this.route.snapshot.params['id'];
    this.avsService
      .getAvis(id)
      .subscribe(avis =>{
          this.avis = avis[0];
          })
  };
  goBack(){
    this.router.navigate(['/avis']);
  }

}
