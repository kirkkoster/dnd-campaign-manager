import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Campaign } from '../models/campaign.model';
import { AchievementService } from './achievement.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private campaigns: BehaviorSubject<Campaign[]> = new BehaviorSubject<Campaign[]>([]);

  constructor(private achievementService: AchievementService) {
    // Initialize with some dummy data for now
    const initialCampaigns: Campaign[] = [
      {
        id: '1',
        name: 'Dragon Hunt',
        description: 'A thrilling hunt for the ancient dragon.',
        sessions: [
          {
            id: '1',
            title: 'The Hunt Begins',
            date: new Date(),
            objectives: ['Find the dragon', 'Survive the first encounter'],
            notes: 'The players decided to split the party...',
          },
        ],
      },
    ];
    this.campaigns.next(initialCampaigns);
  }

  getCampaigns(): Observable<Campaign[]> {
    return this.campaigns.asObservable();
  }

  addCampaign(campaign: Campaign): void {
    const currentCampaigns = this.campaigns.value;
    this.campaigns.next([...currentCampaigns, campaign]);
    // Unlock the "First Campaign" achievement
    this.achievementService.unlockAchievement('1');
  }

  updateCampaign(updatedCampaign: Campaign): void {
    const currentCampaigns = this.campaigns.value.map(campaign =>
      campaign.id === updatedCampaign.id ? updatedCampaign : campaign
    );
    this.campaigns.next(currentCampaigns);
  }

  deleteCampaign(campaignId: string): void {
    const currentCampaigns = this.campaigns.value.filter(campaign => campaign.id !== campaignId);
    this.campaigns.next(currentCampaigns);
  }
}
