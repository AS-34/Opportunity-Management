import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trend } from './trend';

@Injectable({
  providedIn: 'root'
})
export class CurrentTrendsService {

  private locationURL = "http://localhost:8080/api/v1/currentLocationTrends";
  private positionURL = "http://localhost:8080/api/v1/currentPositionTrends";
  private skillURL = "http://localhost:8080/api/v1/currentSkillTrends";
  constructor(private httpClient: HttpClient) { }
  
  getAllCurrentLocations(): Observable<Trend[]>{
    return this.httpClient.get<Trend[]>(`${this.locationURL}`);
  }

  getAllCurrentPositions(): Observable<Trend[]>{
    return this.httpClient.get<Trend[]>(`${this.positionURL}`);
  }

  getAllCurrentSkills(): Observable<Trend[]>{
    return this.httpClient.get<Trend[]>(`${this.skillURL}`);
  }
}
