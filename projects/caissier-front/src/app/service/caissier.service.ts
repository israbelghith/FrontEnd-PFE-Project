import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caissier } from '../Model/Caissier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CaissierService {

  apiURL: string = 'http://localhost:8080/caisses/caissier';
  constructor(private http: HttpClient) {
  }
  listeCaissiers(): Observable<Caissier[]> {
    return this.http.get<Caissier[]>(this.apiURL + '/listerCaissiers');
  }

  listeCaissiersByEtat(name): Observable<any> {
    const url = `${this.apiURL+"/listerCaissierByEtat"}/${name}`;
    return this.http.get<Caissier[]>(url);
  }

  ajouterCaissier(caissier: Caissier): Observable<Caissier> {
    return this.http.post<Caissier>(this.apiURL + '/ajouterCaissier', caissier, httpOptions);
  }


  desactiverCaissier(id: number) {
    const url = `${this.apiURL}/desactiverCaissier/${id}`;
    return this.http.put(url, httpOptions);
  }
  activerCaissier(id: number) {
    const url = `${this.apiURL}/activerCaissier/${id}`;
    return this.http.put(url, httpOptions);
  }

  consulterCaissier(matricule: number): Observable<Caissier> {
    const url = `${this.apiURL}/consulterCaissier/${matricule}`;
    return this.http.get<Caissier>(url);
  }

  updateCaissier(caissier: Caissier): Observable<Caissier> {
    return this.http.put<Caissier>(this.apiURL + '/modifierCaissier', caissier, httpOptions);
  }
}
