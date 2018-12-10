import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyControlsComponent } from './my-controls/my-controls.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyRisksComponent } from './my-risks/my-risks.component';
import { SupportComponent } from './support/support.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MyControlsComponent,
    MyEventsComponent,
    ContactUsComponent,
    MyRisksComponent,
    SupportComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
