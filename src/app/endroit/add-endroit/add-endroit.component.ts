import { Component, OnInit } from '@angular/core';
import { EndroitsService } from 'app/endroits.service';
import { Endroit } from 'app/endroit';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-add-endroit',
  templateUrl: './add-endroit.component.html',
  styleUrls: ['./add-endroit.component.css']
})
export class AddEndroitComponent implements OnInit {

  constructor(
    private endtService: EndroitsService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Endroit();

  addEndroit(){
      this.endtService
        .addEndroit(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/endroit']);
  }


}
