import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/Model/Agent';
import { AgentService } from 'src/app/service/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.scss']
})
export class AddAgentComponent implements OnInit {

  newAgent = new Agent();
  constructor(private agentService:AgentService,private router :Router)  { }

  ngOnInit(): void {
  }

  ajouterAgent(){
    this.agentService.ajouterAgent(this.newAgent)
    .subscribe(agt => {
    console.log(agt);
    });
    this.router.navigate(['/Agent']).then(() => {
      window.location.reload();
      });

  }

}
