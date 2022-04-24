import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caissier } from 'src/app/Model/Caissier';
import { CaissierService } from 'src/app/service/caissier.service';

@Component({
  selector: 'app-list-caissier',
  templateUrl: './list-caissier.component.html',
  styleUrls: ['./list-caissier.component.scss']
})
export class ListCaissierComponent implements OnInit {

  caissiers : Caissier[];
  caissier:Caissier;
  constructor(private caissierService: CaissierService,private router :Router) { }

  ngOnInit(): void {
    this.caissierService.listeCaissiers().subscribe(cais => {
    console.log(cais);
    this.caissiers = cais;

    });
  }

  DesactiverCaissier(c: Caissier)
{
let conf = confirm("Voulez-vous vraiement désactiver ce caissier ?");
if (conf)
this.caissierService.desactiverCaissier(c.idU).subscribe(() => {
console.log("caissier Désactiver");
});
this.router.navigate(['/Caissier']).then(() => {
window.location.reload();
});
}

ActiverCaissier(c: Caissier)
{
let conf = confirm("Voulez-vous vraiement activer ce caissier ?");
if (conf)
this.caissierService.activerCaissier(c.idU).subscribe(() => {
console.log("caissier Activer");
});
this.router.navigate(['/Caissier']).then(() => {
window.location.reload();
});
}

}
