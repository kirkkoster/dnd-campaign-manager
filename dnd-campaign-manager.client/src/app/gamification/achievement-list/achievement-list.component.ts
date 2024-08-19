import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AchievementService } from '../../services/achievement.service';
import { Achievement } from '../../models/achievement.model';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {
  achievements$!: Observable<Achievement[]>;

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.achievements$ = this.achievementService.getAchievements();
  }
}
