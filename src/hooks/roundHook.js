import useInterval from 'use-interval';
import {useSelector} from 'react-redux';

export const useRound = (settings, setPopupVariant) => {
  const game = useSelector((state) => state.game);

  console.log('game :>> ', game);
  useInterval(() => {
    // if (round.inProgress && round.roundTimer === 0) {
    //   setPopupVariant('noWinner');
    //   revealWord();
    //   stop();
    // }
    // if (round.inProgress && round.roundTimer !== 0) {
    //   setRound(decrementTimers(round));
    // }
  }, 1000);

  return 0;
};
