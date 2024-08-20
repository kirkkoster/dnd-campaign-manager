import { Session } from './session.model';
export interface Campaign {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  sessions: Session[];
}
