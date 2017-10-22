import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilisateursService {

 utilisateurs=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getUtilisateurs(){
    return this._http.get("http://localhost/gestion_endroit/utilisateur/select.php/")
      .map(res=>{
        this.checkMe = res;
        if (this.checkMe._body !== "0"){
           return res.json()
        }
      });
  }
  addUtilisateurs(info){
    return this._http.post("http://localhost/gestion_endroit/utilisateur/insert.php",info)
      .map(()=>"");
  }
  getUtilisateur(id){
    return this._http.post("http://localhost/gestion_endroit/utilisateur/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteUtilisateur(id){
    return this._http.post("http://localhost/gestion_endroit/utilisateur/delete.php/",{'id':id})
      .map(()=>this.getUtilisateurs());
  }
  updateUtilisateur(info){
    return this._http.post("http://localhost/gestion_endroit/utilisateur/update.php/", info)
      .map(()=>"");
  }

}
