import { ToasterType } from '@constants';
import { createAction, props } from '@ngrx/store';

export enum ToasterActions {
  ADD_BE_ERROR = '[TOASTER] Add BE error message',
}

export const addBeErrorMessage = createAction(
  ToasterActions.ADD_BE_ERROR,
  props<{ severity: ToasterType; detail: string }>()
);
