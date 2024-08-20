import { Component } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Router } from '@angular/router';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent {
  name: string = '';
  description: string = '';

  constructor(private campaignService: CampaignService, private router: Router) { }

  onSubmit(): void {
    const newCampaign: Campaign = {
      id: 0,
      ownerId: 1,
      name: this.name,
      description: this.description,
      sessions: []
    };
    this.campaignService.createCampaign(newCampaign);
    this.router.navigate(['/campaigns']);  // Redirect to the campaign list
  }
}
