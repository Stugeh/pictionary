import {useState, useEffect} from 'react';
import useInterval from 'use-interval';


export const useRound = (settings, setPopupVariant) => {
  // Init new round
  const [round, setRound] = useState(
      {
        drawer: 0,
        inProgress: false,
        roundTimer: settings.roundTimer,
        letterTimer: settings.letterTimer,
        word: '',
        visible: [],
      },
  );

  useInterval(() => {
    if (round.inProgress && round.roundTimer === 0) {
      setPopupVariant('noWinner');
      revealWord();
      stop();
    }
    if (round.inProgress && round.roundTimer !== 0) {
      setRound(decrementTimers(round));
    }
  }, 1000);

  useEffect(() => {
  }, [round]);

  const decrementTimers = () => {
    const updatedRound = {
      ...round,
      roundTimer: decrement(round.roundTimer, 'round'),
      letterTimer: decrement(round.letterTimer, 'letter'),
    };
    return updatedRound;
  };

  // max value is the value the timer is reset to if it hits 0
  const decrement = (value, timerType) => {
    if (timerType === 'letter' && value === 0) {
      revealLetter(round.word);
      return settings.letterTimer;
    }
    if (timerType === 'round' && value === 0) {
      stop();
      return 0;
    }
    return value-1;
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

  const revealWord = () => {
    console.log(`round`, round);
    console.log(`word`, round.word);
    console.log('visible :>> ', round.visible);
    setRound({...round, visible: round.word.split('')});
    console.log(`round.visible`, round.word.split(''));
  };
  console.log('aaaround.word :>> ', round.word);
  return {nextRound, start, stop, round, setRound, selectWord};
};
