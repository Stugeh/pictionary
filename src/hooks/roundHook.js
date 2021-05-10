import {useState} from 'react';
import useInterval from 'use-interval';


// max value is the value the timer is reset to if it hits 0
const decrement = (value, maxVal, timerType) => {
  const newVal = value-1;
  return newVal === -1 ? maxVal : newVal;
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
        visible: [],
      },
  );

  useInterval(() => {
    if (round.roundTimer === 0) stop();
    if (round.inProgress && round.roundTimer !== 0) {
      setRound(decrementTimers(round));
    }
  }, 1000);

  const decrementTimers = () => {
    const updatedRound = {
      ...round,
      visible: round.letterTimer === 1 ?
      revealLetter(round.visible) : round.visible,
      roundTimer: decrement(round.roundTimer, settings.roundTimer, 'round'),
      letterTimer: decrement(round.letterTimer, settings.letterTimer, 'letter'),
    };
    return updatedRound;
  };


  const start = () => {
    setRound({...round, inProgress: true});
  };

  const stop = () => {
    const updatedRound = {...round, inProgress: false};
    setRound(updatedRound);
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
    const visible = new Array(word.length).fill('_');
    setRound({...round, word, visible});
  };

  const revealLetter = () => {

  };

  return {nextRound, start, stop, round, setRound, selectWord};
};
