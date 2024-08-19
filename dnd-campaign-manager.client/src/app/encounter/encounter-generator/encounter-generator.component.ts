import { Component } from '@angular/core';
import { EncounterService } from '../../services/encounter.service';
import { Encounter } from '../../models/encounter.model';

@Component({
  selector: 'app-encounter-generator',
  templateUrl: './encounter-generator.component.html',
  styleUrls: ['./encounter-generator.component.scss']
})
export class EncounterGeneratorComponent {
  type = 1;
  difficulty = 'medium';
  generatedEncounter: Encounter | null = null;

  constructor(private encounterService: EncounterService) { }

  generateEncounter(): void {
    this.generatedEncounter = this.encounterService.generateEncounter({
      type: this.type,
      difficulty: this.difficulty,
    });
  }
}
