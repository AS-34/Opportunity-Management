import { Component, NgModule } from '@angular/core';
import { CurrentTrendsService } from '../current-trends.service';
import { OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Trend } from '../trend';

@Component({
  selector: 'app-current-trends',
  templateUrl: './current-trends.component.html',
  styleUrls: ['./current-trends.component.css']
})

export class CurrentTrendsComponent implements OnInit {
  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Location';
  showYAxisLabel = true;
  yAxisLabel = 'Count';
  timeline = true;
  xAxisLabel1 = 'Position';
  xAxisLabel2 = 'Skill';

  colorScheme = {
    domain: ['#70db70', '#ffd633', '#ff8000']
  };

  locations!: Trend[];
  positions!: Trend[];
  skills!: Trend[];
  flag = ("true" == localStorage.getItem("loggedin"))
  constructor(private currentTrendsService: CurrentTrendsService) {
   }

  ngOnInit(): void {
    this.getlocations();
    this.getpositions();
    this.getskills();
  }

  private getlocations(){
    this.currentTrendsService.getAllCurrentLocations().subscribe(data=>{
      this.locations = data;
      console.log(this.locations);
    });
  }

  private getpositions(){
    this.currentTrendsService.getAllCurrentPositions().subscribe(data=>{
      this.positions = data;
      console.log(this.positions);
    });
  }

  private getskills(){
    this.currentTrendsService.getAllCurrentPositions().subscribe(data=>{
      this.skills = data;
      console.log(this.positions);
    });
  }
}
