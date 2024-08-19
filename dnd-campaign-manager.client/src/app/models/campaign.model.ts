import { Session } from './session.model';
export interface Campaign {
  id: string;
  name: string;
  description: string;
  sessions: Session[];
}
