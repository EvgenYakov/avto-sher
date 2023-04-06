import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public addItemToStorage(key: string, item: string): void {
    localStorage.setItem(key, item);
  }

  public getItemFromStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  public removeItemFromStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
