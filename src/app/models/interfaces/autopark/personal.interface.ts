import { IRegisterDto } from '@pages';

export interface ICreatePersonalDto extends IRegisterDto {
  autoParkId: number;
}
