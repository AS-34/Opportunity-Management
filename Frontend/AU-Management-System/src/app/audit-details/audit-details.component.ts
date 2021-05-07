import { Component, OnInit } from '@angular/core';
import { Audit } from '../audit';
import { ActivatedRoute } from '@angular/router';
import { AuditService } from '../audit.service';

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.css']
})
export class AuditDetailsComponent implements OnInit {

  id!: number;
  audit!: Audit;
  flag = ("true" == localStorage.getItem("loggedin"))
  constructor(private route: ActivatedRoute, private auditservice: AuditService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.auditservice.getAuditById(this.id).subscribe(data => {
      this.audit = data;
    })
  }

}
