import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign/campaign-detail/campaign-detail.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';
import { EncounterGeneratorComponent } from './encounter/encounter-generator/encounter-generator.component';
import { AchievementListComponent } from './gamification/achievement-list/achievement-list.component';
//import { Achievement } from './models/achievement.model'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    CampaignListComponent,
    CampaignDetailComponent,
    CampaignFormComponent,
    EncounterGeneratorComponent,
    AchievementListComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
