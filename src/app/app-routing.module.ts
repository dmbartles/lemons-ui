import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyControlsComponent } from './my-controls/my-controls.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyRisksComponent } from './my-risks/my-risks.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
    { path: 'LandingPage', component: LandingPageComponent },
    { path: '', redirectTo: '/LandingPage', pathMatch: 'full' },
    { path: 'MyControls', component: MyControlsComponent },
    { path: 'MyEvents', component: MyEventsComponent },
    { path: 'MyRisks', component: MyRisksComponent },
    { path: 'ContactUs', component: ContactUsComponent },
    { path: 'Support', component: SupportComponent },
    { path: 'UnderConstruction', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
