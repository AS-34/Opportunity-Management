import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { OpportunityDetailsComponent } from './opportunity-details/opportunity-details.component';
import { CurrentTrendsComponent } from './current-trends/current-trends.component';
import { AuditComponent } from './audit/audit.component';
import { AuditDetailsComponent } from './audit-details/audit-details.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SearchFilterPipe } from './search-filter.pipe';
import { AuditFilterPipe } from './audit-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpportunityListComponent,
    CreateOpportunityComponent,
    UpdateOpportunityComponent,
    OpportunityDetailsComponent,
    CurrentTrendsComponent,
    AuditComponent,
    AuditDetailsComponent,
    SearchFilterPipe,
    AuditFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
    }),
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '180045441762-780pi2bj2a1a2le62s86fj0vo3facd11.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }, HomeComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
