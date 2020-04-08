import { ISpinnerItem } from "./Spinner";

export interface IRoom {
  spinnerState: ISpinnerState
}

export interface ISpinnerState {
  spinnerValue?: ISpinnerItem,
  isSpinning: boolean
}
