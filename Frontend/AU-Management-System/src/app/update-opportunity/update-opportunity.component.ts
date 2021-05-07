import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';
import { Audit } from '../audit';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-update-opportunity',
  templateUrl: './update-opportunity.component.html',
  styleUrls: ['./update-opportunity.component.css']
})
export class UpdateOpportunityComponent implements OnInit {

  opportunity: Opportunity = new Opportunity();
  audit: Audit = new Audit();
  id!: number;

  flag = ("true" == localStorage.getItem("loggedin"));
  constructor(private opportunityService: OpportunityService,private router: Router, private route: ActivatedRoute, private auditservice: AuditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.opportunityService.getOpportunityById(this.id).subscribe(data=>{
      this.opportunity = data;
      this.audit.oid = data.id;
      this.audit.name = data.name;
      this.audit.locations = data.locations;
      this.audit.hiringManager = data.hiringManager;
      this.audit.skills = data.skills;
      this.audit.openings = data.openings;
      this.audit.ed = data.ed;
      this.audit.description = data.description;
      this.audit.user = localStorage.getItem('currentUser')!;
      this.audit.action = "Update";
    }, error=> console.log(error)); 
  }

  goToOpportunityList(){
    this.router.navigate(['/opportunities']);
  }

  onSubmit(){
    this.opportunityService.updateOpportunity(this.id, this.opportunity).subscribe(data=>{
      console.log(data);
      this.audit.name1 = this.opportunity.name;
      this.audit.locations1 = this.opportunity.locations;
      this.audit.hiringManager1 = this.opportunity.hiringManager;
      this.audit.skills1 = this.opportunity.skills;
      this.audit.openings1 = this.opportunity.openings;
      this.audit.ed1 = this.opportunity.ed;
      this.audit.description1 = this.opportunity.description;
      this.saveAudit();
      this.goToOpportunityList();
    },
    error=> console.log(error));
  }

  saveAudit(){
    this.auditservice.createAudit(this.audit).subscribe(data=>{
      console.log(data);
    },
    error=> console.log(error));
  }

}
