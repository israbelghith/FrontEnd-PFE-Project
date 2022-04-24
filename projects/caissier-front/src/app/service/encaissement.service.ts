import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaissement } from '../Model/Encaissement';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {

  apiURL: string = 'http://localhost:8080/caisses/encaissement';
  constructor(private http: HttpClient) {
  }

  listeEncaissements(): Observable<Encaissement[]> {
    return this.http.get<Encaissement[]>(this.apiURL + '/listerEncaissements');
  }

  listeEncaissementsByEtatETSession(name,nums): Observable<any> {
    const url = `${this.apiURL+"/listerEncaissementsParEtatETSession"}/${name}/${nums}`;
    return this.http.get<Encaissement[]>(url);
  }
  
  listeEncaissementsBySession(session : number): Observable<any> {
    const url = `${this.apiURL+"/listerEncaissementsParSession"}/${session}`;
    return this.http.get<Encaissement[]>(url);
  }

  listerEncaissementParEtatEtPaiementMode(etat:string,mode:string):Observable<Encaissement[]> {
    const url = `${this.apiURL+"/listerParEtatEtPaiementMode"}/${etat}/${mode}`;
    return this.http.get<Encaissement[]>(url);
  }

  ajouterEncaissement( encaissement: Encaissement):Observable<Encaissement>{
    return this.http.post<Encaissement>(this.apiURL+'/ajouterEncaissement', encaissement, httpOptions);
    }
}
