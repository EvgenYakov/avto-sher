import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private getFromStorage(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  private setToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public addItemToStorage(key: string, item: any): void {
    this.setToStorage(key, item);
  }

  public getItemFromStorage(key: string): any {
    return this.getFromStorage(key);
  }

  public setItemFromStorage(key: string, item: any): void {
    this.setToStorage(key, item);
  }

  public removeItemFromStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
