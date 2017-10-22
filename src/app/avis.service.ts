import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AvisService {

 avis=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getAviss(){
    return this._http.get("http://localhost/gestion_endroit/avis/select.php/")
      .map(res=>{
        this.checkMe = res;
        if (this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }
  addAvis(info){
    return this._http.post("http://localhost/gestion_endroit/avis/insert.php",info)
      .map(()=>"");
  }
  getAvis(id){
    return this._http.post("http://localhost/gestion_endroit/avis/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteAvis(id){
    return this._http.post("http://localhost/gestion_endroit/avis/delete.php/",{'id':id})
      .map(()=>this.getAviss());
  }
  updateAvis(info){
    return this._http.post("http://localhost/gestion_endroit/avis/update.php/", info)
      .map(()=>"");
  }


}
