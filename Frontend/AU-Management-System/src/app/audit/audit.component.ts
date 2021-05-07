import { Component, OnInit } from '@angular/core';
import { Audit } from '../audit';
import { AuditService } from '../audit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  searchValue1!: string;
  searchValue2!: string;
  searchValue3!: string;

  audits!: Audit[];
  flag = ("true" == localStorage.getItem("loggedin"));
  constructor(private auditService: AuditService, private router: Router) { }

  ngOnInit(): void {
    this.getAudits();
  }

  private getAudits(){
    this.auditService.getAuditList().subscribe(data => {
      this.audits = data;
      this.audits.reverse();
      console.log("All audits retrieved");
      console.log(data);
    })
  }

  viewAudit(id: number){
    this.router.navigate(['audit-details', id]);
  }

}
