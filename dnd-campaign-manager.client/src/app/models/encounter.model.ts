export interface Encounter {
  id: string;
  name: string;
  encounterType: EncounterTypeEnum;
  difficulty: string;
  creatures: string[];
  loot: string[];
}

enum EncounterTypeEnum {
  combat = 0,
  social = 1,
  exploration = 2
}
