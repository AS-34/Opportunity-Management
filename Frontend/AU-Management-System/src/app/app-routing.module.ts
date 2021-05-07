import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditDetailsComponent } from './audit-details/audit-details.component';
import { AuditComponent } from './audit/audit.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { CurrentTrendsComponent } from './current-trends/current-trends.component';
import { HomeComponent } from './home/home.component';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'opportunities', component: OpportunityListComponent},
  {path: 'create-opportunity', component: CreateOpportunityComponent},
  {path: 'update-opportunity/:id', component: UpdateOpportunityComponent},
  {path: 'opportunity-details/:id', component: OpportunityDetailsComponent},
  {path: 'current-trends', component: CurrentTrendsComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'audit-details/:id', component: AuditDetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
