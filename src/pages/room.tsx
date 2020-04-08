import React, { useState } from 'react';
import { RouteComponentProps } from "@reach/router"
import Typography from '@material-ui/core/Typography';
import { Spinner } from '../components/Spinner';
import { Spinner as SpinnerModel, ISpinnerItem } from "../models/Spinner";

const spinnerSingleton = new SpinnerModel();

export function Room (props: RouteComponentProps<{id: Number}>) {
    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [spinValue, setSpinValue] = useState<ISpinnerItem | null>(null);
    return (
      <Spinner value={spinValue?.toString() || ""} isSpinning={isSpinning} onClick={ () => {
        setIsSpinning(true);
        setTimeout(() => {
          setIsSpinning(false);
          setSpinValue(spinnerSingleton.spin())
        },1500);
      }} />
    );
}
