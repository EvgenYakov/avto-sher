export interface Dropdown {
  label?: string;
  formControlName: string;
  placeholder: string;
  options: DropdownOption[];
}

export interface DropdownOption {
  label: string;
  value: string | number;
}
