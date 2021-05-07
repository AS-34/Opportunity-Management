import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audit } from './audit';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  private apiURL = "http://localhost:8080/api/v1/audits";

  constructor(private httpClient: HttpClient) { }

  getAuditList(): Observable<Audit[]>{
    return this.httpClient.get<Audit[]>(`${this.apiURL}`);
  }

  createAudit(audit: Audit): Observable<Object>{
    var d = new Date(Date.now());
    d.toString()
    audit.auditOn = d;
    return this.httpClient.post(`${this.apiURL}`, audit);
  }

  getAuditById(id: number): Observable<Audit>{
    return this.httpClient.get<Audit>(`${this.apiURL}/${id}`);
  }
}
