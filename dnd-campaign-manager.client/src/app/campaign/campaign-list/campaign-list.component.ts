import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign.model';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  campaigns$!: Observable<Campaign[]>;

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaigns$ = this.campaignService.getCampaigns();
  }
}
