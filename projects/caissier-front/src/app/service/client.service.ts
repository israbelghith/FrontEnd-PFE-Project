import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiURL: string = 'http://localhost:8080/caisses/client';
    constructor(private http : HttpClient) {
    }
    chercherCaisse(refCli: number): Observable<Client>{
        return this.http.get<Client>(this.apiURL+'/refClient/'+refCli);
        }
}
