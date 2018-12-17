import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyControlsComponent } from './my-controls/my-controls.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyRisksComponent } from './my-risks/my-risks.component';
import { MyMonitoringComponent } from './my-monitoring/my-monitoring.component';
import { MyMonitoring2Component } from './my-monitoring2/my-monitoring2.component';
import { MyMonitoring3Component } from './my-monitoring3/my-monitoring3.component';
import { MyMonitoring4Component } from './my-monitoring4/my-monitoring4.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
    { path: 'LandingPage', component: LandingPageComponent },
    { path: '', redirectTo: '/LandingPage', pathMatch: 'full' },
    { path: 'MyControls', component: MyControlsComponent },
    { path: 'MyEvents', component: MyEventsComponent },
    { path: 'MyRisks', component: MyRisksComponent },
    { path: 'MyMonitoring', component: MyMonitoringComponent },
    { path: 'MyMonitoring2', component: MyMonitoring2Component },
    { path: 'MyMonitoring3', component: MyMonitoring3Component },
    { path: 'MyMonitoring4', component: MyMonitoring4Component },
    { path: 'ContactUs', component: ContactUsComponent },
    { path: 'Support', component: SupportComponent },
    { path: 'UnderConstruction', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
