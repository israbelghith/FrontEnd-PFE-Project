import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent } from 'src/app/Model/Agent';
import { AgentService } from 'src/app/service/agent.service';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styles: [
  ]
})
export class UpdateAgentComponent implements OnInit {

  currentAgent = new Agent();
    constructor(private activatedRoute: ActivatedRoute,
      private agentService: AgentService,
      private router :Router) { }

    ngOnInit(): void {
      this.agentService.consulterAgent(this.activatedRoute.snapshot.params.matricule).
   subscribe( agt =>{ this.currentAgent = agt; } ) ;
    }

    modifierAgent() {
      this.agentService.updateAgent(this.currentAgent).subscribe(agt => {
      this.router.navigate(['/Agent']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}
