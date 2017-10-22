import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';

@Component({
  selector: 'app-edit-endroit',
  templateUrl: './edit-endroit.component.html',
  styleUrls: ['./edit-endroit.component.css']
})
export class EditEndroitComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private endtService: EndroitsService
  ) { }

  ngOnInit() {
      this.getSingleEndroit();
  }
  model = new Endroit();
  id = this.route.snapshot.params['id'];
  getSingleEndroit(){
    this.endtService
      .getEndroit(this.id)
      .subscribe(endroit =>{
          this.model = endroit[0];
        })
  };
  updateEndroit(){
      this.endtService
        .updateEndroit(this.model)
        .subscribe(() => this.goBack());
  }
   goBack(){
    this.router.navigate(['/endroit']);
  }
}
