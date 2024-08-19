import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { CampaignDetailComponent } from './campaign/campaign-detail/campaign-detail.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list.component';
import { EncounterGeneratorComponent } from './encounter/encounter-generator/encounter-generator.component';
import { AchievementListComponent } from './gamification/achievement-list/achievement-list.component';
import { CampaignFormComponent } from './campaign/campaign-form/campaign-form.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'campaigns', component: CampaignListComponent },
  { path: 'campaign/:id', component: CampaignDetailComponent },
  { path: 'encounter-generator', component: EncounterGeneratorComponent },
  { path: 'achievements', component: AchievementListComponent },
  { path: 'new-campaign', component: CampaignFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
