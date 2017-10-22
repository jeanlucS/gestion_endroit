import { Component, OnInit } from '@angular/core';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-list-endroit',
  templateUrl: './list-endroit.component.html',
  styleUrls: ['./list-endroit.component.css']
})
export class ListEndroitComponent implements OnInit {

  constructor(
    private endtService:EndroitsService,
    private router: Router
   ) { }
  endroits:any;
  ngOnInit() {
    this.getEndroits();
  }
  getEndroits(){
     this.endtService
        .getEndroits()
        .subscribe(endroit => {
          this.endroits = endroit;
      } )
  }
  deleteEndroit(id){
      this.endtService
        .deleteEndroit(id)
        .subscribe(() => {
        this.getEndroits();
      } )
  }
}
