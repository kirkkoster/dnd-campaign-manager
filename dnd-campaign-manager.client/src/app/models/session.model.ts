export interface Session {
  id: number;
  ownerId: number;
  title: string;
  date: Date;
  objectives: string[];
  notes: string;
}
