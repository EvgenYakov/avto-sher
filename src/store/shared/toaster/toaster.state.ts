import { ToasterType } from '@constants';

export interface ToasterState {
  detail: string;
  severity: ToasterType
}