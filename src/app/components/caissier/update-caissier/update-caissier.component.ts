import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { CaissierService } from 'src/app/service/caissier.service';

@Component({
  selector: 'app-update-caissier',
  templateUrl: './update-caissier.component.html',
  styles: [
  ]
})
export class UpdateCaissierComponent implements OnInit {

  currentCaissier = new Caissier();
  constructor(private activatedRoute: ActivatedRoute,
    private caissierService: CaissierService,
    private router :Router) { }

  ngOnInit(): void {
    this.caissierService.consulterCaissier(this.activatedRoute.snapshot.params.matricule).
 subscribe( cais =>{ this.currentCaissier = cais; } ) ;
  }

  modifierCaissier() {
    this.caissierService.updateCaissier(this.currentCaissier).subscribe(cais => {
    this.router.navigate(['/Caissier']);

    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
