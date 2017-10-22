import { Component, OnInit } from '@angular/core';
import { AvisService } from 'app/avis.service';
import { Endroit } from 'app/endroit';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-list-avis',
  templateUrl: './list-avis.component.html',
  styleUrls: ['./list-avis.component.css']
})
export class ListAvisComponent implements OnInit {

  constructor(
    private avsService:AvisService,
    private router: Router
   ) { }
  aviss:any;
  ngOnInit() {
    this.getAviss();
  }
  getAviss(){
     this.avsService
        .getAviss()
        .subscribe(avis => {
          this.aviss = avis;
      } )
  }
  deleteAvis(id){
      this.avsService
        .deleteAvis(id)
        .subscribe(() => {
        this.getAviss();
      } )
  }
}
