import { Component, OnInit } from '@angular/core';
import {Opportunity} from '../opportunity'
import { OpportunityService } from '../opportunity.service';
import {HomeComponent} from '../home/home.component'
import { Router } from '@angular/router';
import { Audit } from '../audit';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {

  searchValue1!: string;
  searchValue2!: string;
  searchValue3!: string;
  searchValue4!: string;
  searchValue5!: Date;
  searchValue6!: string;
  popoverTitle = "Confirm";
  popoverMessage = "Are you sure you want to Delete?";


  audit: Audit = new Audit();
  opportunities!: Opportunity[];
  flag = ("true" == localStorage.getItem("loggedin"))
  constructor(private opportunityService: OpportunityService, private homeComponent: HomeComponent, private router: Router, private auditservice: AuditService) { }
  ngOnInit(): void {
    this.getOpportunities();
  }

  private getOpportunities(){
    console.log(this.flag);
      this.opportunityService.getOpportunityList().subscribe(data => {
        this.opportunities = data;
        this.opportunities.reverse();
        console.log(this.opportunities);
      }
    );
  }

  updateOpportunity(id: number){
    this.router.navigate(['update-opportunity', id]);
  }

  deleteOpportunity(id: number){
    this.opportunityService.getOpportunityById(id).subscribe(data =>{
      this.audit.oid = data.id;
      this.audit.name = data.name;
      this.audit.locations = data.locations;
      this.audit.hiringManager = data.hiringManager;
      this.audit.skills = data.skills;
      this.audit.openings = data.openings;
      this.audit.ed = data.ed;
      this.audit.description = data.description;
      this.audit.user = localStorage.getItem('currentUser')!;
      this.audit.action = "Delete";
      this.saveAudit();
    })
    this.opportunityService.deleteOpportunity(id).subscribe(data=>{
      console.log(data);
      this.getOpportunities();
    })
  }

  viewOpportunity(id: number){
    this.router.navigate(['opportunity-details', id]);
  }

  saveAudit(){
    this.auditservice.createAudit(this.audit).subscribe(data=>{
      console.log(data);
    },
    error=> console.log(error));
  }

}
