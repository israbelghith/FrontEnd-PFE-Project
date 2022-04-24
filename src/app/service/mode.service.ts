import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModePaiement } from '../Model/ModePaiement';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  apiURL: string = 'http://localhost:8080/caisses/mode';
  constructor(private http: HttpClient) {
  }
  listeModes(): Observable<any> {
    return this.http.get<ModePaiement[]>(this.apiURL+"/listerModePaiements");
  }

  listerModePaiementParEtat(name): Observable<any> {
    const url = `${this.apiURL+"/listerModePaiementParEtat"}/${name}`;
    return this.http.get<ModePaiement[]>(url);
  }

  ajouterMode(prod: ModePaiement): Observable<ModePaiement> {
    return this.http.post<ModePaiement>(this.apiURL+"/ajouterModePaiement", prod, httpOptions);
  }

  consulterMode(id: number): Observable<ModePaiement> {
    const url = `${this.apiURL+"/consulterModePaiement"}/${id}`;
    return this.http.get<ModePaiement>(url);
  }

  updateMode(prod: ModePaiement): Observable<ModePaiement> {
    return this.http.put<ModePaiement>(this.apiURL+"/modifierModePaiement", prod, httpOptions);
  }

  DesactiverMode(id: number) {
    const url = `${this.apiURL+"/desactiverMode"}/${id}`;
    return this.http.put(url, httpOptions);
  }

  ActiverMode(id: number) {
    const url = `${this.apiURL+"/activerMode"}/${id}`;
    return this.http.put(url, httpOptions);
  }
}
