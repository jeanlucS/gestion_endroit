import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EndroitsService {

endroits=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getEndroits(){
    return this._http.get("http://localhost/gestion_endroit/endroit/select.php/")
      .map(res=>{
        this.checkMe = res;
        if (this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }
  addEndroit(info){
    return this._http.post("http://localhost/gestion_endroit/endroit/insert.php",info)
      .map(()=>"");
  }
  getEndroit(id){
    return this._http.post("http://localhost/gestion_endroit/endroit/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteEndroit(id){
    return this._http.post("http://localhost/gestion_endroit/endroit/delete.php/",{'id':id})
      .map(()=>this.getEndroits());
  }
  updateEndroit(info){
    return this._http.post("http://localhost/gestion_endroit/endroit/update.php/", info)
      .map(()=>"");
  }

}
