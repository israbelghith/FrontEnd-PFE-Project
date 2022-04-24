import { Component, OnInit} from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api'
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { ModeService } from 'src/app/service/mode.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './mode.component.html',
    providers: [MessageService, ConfirmationService],
    styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class ModeComponent implements OnInit {

    modes: ModePaiement[];
    mode : ModePaiement;
    constructor(private modeService: ModeService, private router: Router) {}

    ngOnInit() {
        this.modeService.listeModes().subscribe(livs => {
            console.log(livs);
            this.modes = livs;
          });
       
}

desactiverMode(p: ModePaiement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.modeService.DesactiverMode(p.code).subscribe(() => {
        console.log("mode desactivé");
      });
    this.router.navigate(['/ModePaiement']).then(() => {
      window.location.reload();
    });
  }

  activerMode(p: ModePaiement) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.modeService.ActiverMode(p.code).subscribe(() => {
        console.log("mode activé");
      });
    this.router.navigate(['/ModePaiement']).then(() => {
      window.location.reload();
    });
  }
}
