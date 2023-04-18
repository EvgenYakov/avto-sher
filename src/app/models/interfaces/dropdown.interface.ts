export interface Dropdown {
  formControlName: string;
  placeholder: string;
  options: DropdownOption[];
}

export interface DropdownOption {
  label: string;
  value: string;
}
