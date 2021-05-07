import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Opportunity } from './opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private apiURL = "http://localhost:8080/api/v1/opportunities";

  constructor(private httpClient: HttpClient) { }

  getOpportunityList(): Observable<Opportunity[]>{
    console.log("Getting List");
    return this.httpClient.get<Opportunity[]>(`${this.apiURL}`);
  }

  createOpportunity(opportunity: Opportunity): Observable<Object>{
    return this.httpClient.post(`${this.apiURL}`, opportunity);
  }

  getOpportunityById(id: number): Observable<Opportunity>{
    return this.httpClient.get<Opportunity>(`${this.apiURL}/${id}`);
  }

  updateOpportunity(id: number, opportunity: Opportunity){
    return this.httpClient.put(`${this.apiURL}/${id}`, opportunity);

  }

  deleteOpportunity(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }
}
