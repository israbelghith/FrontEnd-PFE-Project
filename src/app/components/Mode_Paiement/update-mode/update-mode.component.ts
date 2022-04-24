import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModePaiement } from 'src/app/Model/ModePaiement';
import { ModeService } from 'src/app/service/mode.service';

@Component({
  selector: 'app-update-mode',
  templateUrl: './update-mode.component.html',
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
export class UpdateModeComponent implements OnInit {
  currentMode = new ModePaiement();
  constructor(private activatedRoute: ActivatedRoute,private modeService: ModeService,private router :Router) 
  { }

  ngOnInit(): void {
    this.modeService.consulterMode(this.activatedRoute.snapshot.params.id).
    subscribe( mo =>{ this.currentMode = mo; } ) ;
  }
  updateMode() {
    this.modeService.updateMode(this.currentMode).subscribe(mo => {
    this.router.navigate(['/ModePaiement']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
}
