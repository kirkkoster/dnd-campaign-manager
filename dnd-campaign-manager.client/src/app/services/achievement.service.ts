import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achievement } from '../models/achievement.model';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private achievements: BehaviorSubject<Achievement[]> = new BehaviorSubject<Achievement[]>([
    { id: '1', name: 'First Campaign', description: 'Create your first campaign', unlocked: false },
    { id: '2', name: 'First Encounter', description: 'Generate your first encounter', unlocked: false },
    // Add more achievements as needed
  ]);

  getAchievements(): Observable<Achievement[]> {
    return this.achievements.asObservable();
  }

  unlockAchievement(id: string): void {
    debugger
    const updatedAchievements = this.achievements.value.map(achievement => {
      if (achievement.id === id) {
        return { ...achievement, unlocked: true };
      }
      return achievement;
    });
    this.achievements.next(updatedAchievements);
  }
}
