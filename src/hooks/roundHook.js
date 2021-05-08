import {useState} from 'react';
import useInterval from 'use-interval';


// max value is the value the timer is reset to if it hits 0
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
        word: '',
        visible: '',
        winner: null,
      },
  );

  const decrementTimers = () => {
    if (round.roundTimer === 1) {
      stop();
      return round;
    }

    const updatedRound = {
      ...round,
      visible: round.letterTimer===1 ?
          revealLetter(round.visible) : round.visible,
      roundTimer: decrement(round.roundTimer, settings.roundTimer),
      letterTimer: decrement(round.letterTimer, settings.letterTimer),
    };
    setRound(updatedRound);
  };

  if (round.inProgress) {
    useInterval(() => {
      setRound(decrementTimers(round));
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
      word: '',
      visible: '',
      drawer: newDrawer,
      inProgress: false,
      roundTimer: settings.roundTimer,
      letterTimer: settings.letterTimer,
    });
  };

  const selectWord = (word) => {
    setRound(...round, word);
  };

  return {nextRound, start, stop, round, setRound, selectWord};
};
