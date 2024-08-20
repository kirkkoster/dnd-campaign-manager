import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Campaign } from '../models/campaign.model';
import { AchievementService } from './achievement.service';
import { HttpClient } from '@angular/common/http';
import { ApiHelperService } from '../helpers/api';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private campaigns: BehaviorSubject<Campaign[]> = new BehaviorSubject<Campaign[]>([]);

  constructor(private achievementService: AchievementService, private http: HttpClient, private apiHelper: ApiHelperService) {
    // Initialize with some dummy data for now
    const initialCampaigns: Campaign[] = [
      {
        id: 1,
        ownerId: 1,
        name: 'Dragon Hunt',
        description: 'A thrilling hunt for the ancient dragon.',
        sessions: [
          {
            id: 1,
            ownerId: 1,
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

  //getCampaigns(): Observable<Campaign[]> {
  //  return this.campaigns.asObservable();
    
  //}

  //addCampaign(campaign: Campaign): void {
  //  const currentCampaigns = this.campaigns.value;
  //  this.campaigns.next([...currentCampaigns, campaign]);
  //  // Unlock the "First Campaign" achievement
  //  this.achievementService.unlockAchievement('1');
  //}

  //updateCampaign(updatedCampaign: Campaign): void {
  //  const currentCampaigns = this.campaigns.value.map(campaign =>
  //    campaign.id === updatedCampaign.id ? updatedCampaign : campaign
  //  );
  //  this.campaigns.next(currentCampaigns);
  //}

  //deleteCampaign(campaignId: number): void {
  //  const currentCampaigns = this.campaigns.value.filter(campaign => campaign.id !== campaignId);
  //  this.campaigns.next(currentCampaigns);
  //}

  getCampaigns(): Observable<Campaign[]> {
    const url = this.apiHelper.getUrl('campaign');
    return this.http.get<Campaign[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getCampaignById(id: number): Observable<Campaign> {
    const url = this.apiHelper.getUrl(`campaign/${id}`);
    return this.http.get<Campaign>(url).pipe(
      catchError(this.handleError)
    );
  }

  createCampaign(campaign: Campaign): Observable<Campaign> {
    debugger
    const url = this.apiHelper.getUrl('addcampaign');
    return this.http.post<Campaign>(url, campaign).pipe(
      catchError(this.handleError)
    );
  }

  updateCampaign(campaign: Campaign): Observable<Campaign> {
    const url = this.apiHelper.getUrl(`campaigns/${campaign.id}`);
    return this.http.put<Campaign>(url, campaign).pipe(
      catchError(this.handleError)
    );
  }

  deleteCampaign(id: number): Observable<void> {
    const url = this.apiHelper.getUrl(`campaigns/${id}`);
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
