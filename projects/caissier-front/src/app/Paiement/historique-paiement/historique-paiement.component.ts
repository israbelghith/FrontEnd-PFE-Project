import { Component, OnInit } from '@angular/core';
import { Paiement } from 'src/app/Model/Paiement';
import { PaiementService } from 'src/app/service/paiement.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-historique-paiement',
  templateUrl: './historique-paiement.component.html',
  styleUrls: ['./historique-paiement.component.scss']
})
export class HistoriquePaiementComponent implements OnInit {


  paiements :Paiement[];
  idU:number=1;

  constructor(  private paiementService: PaiementService,private sessionCaisseService: SessionService) { }

  ngOnInit(): void {
      this.sessionCaisseService.chercherByEtatEtCaissierId("en cours",2).subscribe(session => {
          console.log(session.numS);
          this.listerPaiements(session.numS);
                      });
  }

  listerPaiements(nums: number)
  {
      this.paiementService.listerPaiements(nums).subscribe(paie => {
          console.log(paie);
          this.paiements=paie//.push(paie);
          console.log(this.paiements[1].factures);

          });
  }


}
