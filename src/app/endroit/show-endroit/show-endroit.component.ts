import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';

@Component({
  selector: 'app-show-endroit',
  templateUrl: './show-endroit.component.html',
  styleUrls: ['./show-endroit.component.css']
})
export class ShowEndroitComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private endrtService: EndroitsService
  ) { }

  ngOnInit() {
    this.getSingleEndroit();
  }
  // tslint:disable-next-line:member-ordering
  endroit: Endroit;
  getSingleEndroit(){
    var id = this.route.snapshot.params['id'];
    this.endrtService
      .getEndroit(id)
      .subscribe(endroit =>{
          this.endroit = endroit[0];
          })
  };

  goBack(){
    this.router.navigate(['/endroit']);
  }

}
