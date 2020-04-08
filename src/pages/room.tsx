import React, { useState } from 'react';
import { RouteComponentProps } from "@reach/router"
import Typography from '@material-ui/core/Typography';
import { Spinner } from '../components/Spinner';
import { Spinner as SpinnerModel, spinnerItemToString } from '../models/Spinner';
import { useDatabase } from '../store/firebase';
import { IRoom, ISpinnerState } from '../models/Rooms';

const spinnerSingleton = new SpinnerModel();

export function Room ({ id }: RouteComponentProps<{id: Number}>) {
    // const [isSpinning, setIsSpinning] = useState<boolean>(false);
    // const [spinValue, setSpinValue] = useState<ISpinnerItem | undefined>();
    const [spinnerState, setSpinnerState] = useState<ISpinnerState>();
    const ref = useDatabase<ISpinnerState>(`rooms/${id}/spinnerState`, (a) => {
      if(!a) {
        return;
      }
      setSpinnerState(a);
    }, { isSpinning: false });
    if(!id){
      return <Typography variant="h1">Room not found 🔥</Typography>;
    }
    if(!spinnerState) {
      return <Typography variant="h1">Loading...</Typography>;
    }
    return (
      <Spinner value={spinnerState?.spinnerValue ? spinnerItemToString(spinnerState.spinnerValue) : "Spin me"} isSpinning={!!spinnerState?.isSpinning} onClick={ () => {
        ref.set({ ...spinnerState, isSpinning: true  });
        setTimeout(() => {
          ref.set({ isSpinning: false, spinnerValue: spinnerSingleton.spin() });
        }, 700);
      }} />
    );
}
