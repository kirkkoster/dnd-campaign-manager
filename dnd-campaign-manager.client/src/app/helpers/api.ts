import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  private readonly baseUrl: string = 'http://localhost:7247'; // Change this as needed

  constructor() { }

  public getUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
}
