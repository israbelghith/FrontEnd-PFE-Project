import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caisse } from 'src/app/Model/Caisse';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { CaisseService } from 'src/app/service/caisse.service';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-add-caisse',
  templateUrl: './add-caisse.component.html',
  styleUrls: ['./add-caisse.component.scss']
})
export class AddCaisseComponent implements OnInit {
  modesPaiement: any = [];
  modes: ModePaiement[];
  newCaisse= new Caisse();
  constructor(private activatedRoute: ActivatedRoute, private caisseService: CaisseService, private modeService: ModeService, private router: Router) { }

  ngOnInit(): void {
    this.onSelectMode();
    console.log(this.modes);
  }
  onSelectMode() {
    this.modeService.listerModePaiementParEtat("active").subscribe(response => {
      console.log(response)
      this.modesPaiement = response;

    });
  }

  addCaisse(){
    this.caisseService.ajouterCaisse(this.newCaisse)
    .subscribe(cai => {
    console.log(cai);
    });
    this.router.navigate(['/Caisse']).then(() => {
      window.location.reload();
    });
  
  }
}
