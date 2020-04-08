import * as firebase from 'firebase';
import React, { useState, useEffect, useMemo } from 'react';

const config = {
    apiKey: "AIzaSyD3Oh6tRozOmQg9pTc2-9UB4bwB1SQqUrY",
    // authDomain: "retrod-7e2cd.firebaseapp.com",
    databaseURL: "https://moneycard-b2d1c.firebaseio.com/",
  }
  firebase.initializeApp(config);
  export const databaseRef = firebase.database();

  export function useDatabase<T>(ref: string, cb: (arg0: T | undefined) => void, defaultValue?: T ) {
    const connectedRef = useMemo(() => databaseRef.ref(ref), [ref]);
    useEffect(() => {
      connectedRef.on('value', (snapshot) => {
        const exists = snapshot.exists();
        if(!exists && defaultValue) {
          connectedRef.set(defaultValue);
        }
        cb(snapshot.val() as T);
      });
      return () => connectedRef.off('value');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connectedRef]);
    return connectedRef;
  }
