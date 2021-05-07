import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';
import { Audit } from '../audit';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.css']
})
export class OpportunityDetailsComponent implements OnInit {

  flag = ("true" == localStorage.getItem("loggedin"))
  audit: Audit = new Audit();
  id!: number;
  opportunity!: Opportunity;
  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService, private auditservice: AuditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.opportunityService.getOpportunityById(this.id).subscribe(data =>{
      this.opportunity = data;
      this.audit.oid = data.id;
      this.audit.name = data.name;
      this.audit.locations = data.locations;
      this.audit.hiringManager = data.hiringManager;
      this.audit.skills = data.skills;
      this.audit.openings = data.openings;
      this.audit.ed = data.ed;
      this.audit.description = data.description;
      this.audit.name1 = data.name;
      this.audit.locations1 = data.locations;
      this.audit.hiringManager1 = data.hiringManager;
      this.audit.skills1 = data.skills;
      this.audit.openings1 = data.openings;
      this.audit.ed1 = data.ed;
      this.audit.description1 = data.description;
      this.audit.user = localStorage.getItem('currentUser')!;
      this.audit.action = "View";
      if(localStorage.getItem("loggedin") == "true"){
        this.saveAudit();
      }
    })
  }

  saveAudit(){
    this.auditservice.createAudit(this.audit).subscribe(data=>{
      console.log(data);
    },
    error=> console.log(error));
  }

}
