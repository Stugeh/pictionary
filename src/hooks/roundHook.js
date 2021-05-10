import useInterval from 'use-interval';


export const useRound = (settings, setPopupVariant) => {
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


  const selectWord = (word) => {
    const visible = new Array(word.length).fill('_');
    setRound({...round, word, visible});
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
