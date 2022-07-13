export interface IArtist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;
}

export class Artist {
  id: string;
  name: string;
  grammy: boolean;  
}
