import {useState} from 'react';
import useInterval from 'use-interval';

const decrement = (value, maxVal) => {
  const newVal = value-1;
  return newVal === 0 ? maxVal : newVal;
};

export const useRound = (settings, drawer=0) => {
  // Init new round
  const [round, setRound] = useState(
      {
        drawer,
        inProgress: false,
        roundTimer: settings.roundTimer,
        letterTimer: settings.letterTimer,
      },
  );

  const decrementTimers = () => {
    setRound({
      ...round,
      roundTimer: decrement(round.roundTimer),
      letterTimer: decrement(round.letterTimer),
    });
  };

  if (round.inProgress) {
    useInterval(() => {
      decrementTimers(round);
    }, 1000);
  }

  const start = () => {
    setRound({...round, inProgress: true});
  };

  const stop = () => {
    setRound({...round, inProgress: false});
  };

  const nextRound = () => {
    const newDrawer = drawer === settings.playerList.length-1 ? 0 : drawer+1;
    setRound({
      drawer: newDrawer,
      inProgress: false,
      roundTimer: settings.roundTimer,
      letterTimer: settings.letterTimer,
    });
  };

  return {nextRound, start, stop, round, setRound};
};
