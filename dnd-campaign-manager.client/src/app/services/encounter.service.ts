import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Encounter } from '../models/encounter.model';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  private encounters: BehaviorSubject<Encounter[]> = new BehaviorSubject<Encounter[]>([]);

  getEncounters(): Observable<Encounter[]> {
    return this.encounters.asObservable();
  }

  generateEncounter(params: { type: number; difficulty: string; }): Encounter {
    // Example logic for generating an encounter
    const newEncounter: Encounter = {
      id: this.generateId(),
      name: `Generated Encounter ${Date.now()}`,
      encounterType: params.type,
      difficulty: params.difficulty,
      creatures: this.getCreatures(params.type, params.difficulty),
      loot: this.getLoot(params.difficulty),
    };
    this.encounters.next([...this.encounters.value, newEncounter]);
    return newEncounter;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private getCreatures(type: number, difficulty: string): string[] {
    // Dummy logic to get creatures based on type and difficulty
    if (type === 1 && difficulty === 'hard') {
      return ['Orc', 'Troll'];
    }
    return ['Goblin'];
  }

  private getLoot(difficulty: string): string[] {
    // Dummy logic to get loot based on difficulty
    if (difficulty === 'hard') {
      return ['Sword of Valor', 'Shield of Fortitude'];
    }
    return ['Potion of Healing'];
  }
}
