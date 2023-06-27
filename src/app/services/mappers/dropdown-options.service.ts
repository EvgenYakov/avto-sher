import { Injectable } from '@angular/core';

import { DropdownOption } from '@models';

@Injectable( { providedIn: 'root' } )
export class DropdownOptionsService {
  public mapToDropdownOptions(items: string[]): DropdownOption[] {
    return items.map( item => ({
      label: item,
      value: item
    }) );
  }
}
