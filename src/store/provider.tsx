import { useState, FC, useContext, createContext } from "react";

interface IAutoplay {
	numberBets: string
	stopProfit: string
	stopLoss: string
	profit: string
	loss: string
}

export interface IGame {
    session: number
	bet: string
	win: string
	currency: string
	multiplier: string
	rollOver: string
	winChance: string
	autoplay?: IAutoplay
    exchange: number
    isLock: boolean
	history: number[]
}

interface GameContext {
	game?: IGame
	setLock: (val: boolean) => void
	init: () => void
	play: () => void
	history: (val: number) => void
	setBet: (num: string) => void
	setWin: (num: string) => void
	setRoll: (num: string) => void
	setBetAmount: (num: string) => void
	setStopProfit: (num: string) => void
	setStopLoss: (num: string) => void
	setMulti: (obj: any) => void
}

const gameContext = createContext({} as GameContext);

export const useGame = () => {
	return useContext(gameContext);
};

function useProvideGame() {

    const initialState: IGame = {
        session: 0,
        bet: '0',
        win: '0',
        currency: 'USDT',
		multiplier: '0',
		rollOver: '50',
		winChance: '50',
        exchange: 72000,
        isLock: false,
		autoplay: {
			numberBets: '0',
			stopProfit: '0',
			stopLoss: '0',
	        profit: '0',
            loss: '0',
		},
        history: [],
    }

    const [game, setGame] = useState<IGame>(initialState);

	// backend logic ------------------
	const init = async () => {
        console.log('init');
    };

    const play = async () => {
        setGame({ ...game,
            session: game.session + 1,
        });
    };

    const history = async (val: number) => {
        // console.log('history');
        setGame({ ...game,
			history: [
                val,
                ...game.history,
            ]
        });
    };
	// ---------------------------

    const setLock = (val: boolean) => {
        setGame({ ...game,
			isLock: val
        });
    };

    const setMulti = (obj: any) => {
        setGame({ ...game,
			multiplier: obj.multiplier,
			rollOver: obj.rollOver,
			winChance: obj.winChance,
        });
    };
    const setBet = (num: string) => {
        setGame({ ...game,
            bet: num,
        });
    };
    const setWin = (num: string) => {
        setGame({ ...game,
            win: num,
        });
    };
    const setRoll = (num: string) => {
		setGame({ ...game,
            rollOver: num,
        });
    };
    const setBetAmount = (num: string) => {
        setGame({ ...game,
            autoplay: {
				...game.autoplay,
				numberBets: num
			},
        });
    };
    const setStopProfit = (num: string) => {
        setGame({ ...game,
            autoplay: {
				...game.autoplay,
				stopProfit: num
			},
        });
    };
    const setStopLoss = (num: string) => {
        setGame({ ...game,
            autoplay: {
				...game.autoplay,
				stopLoss: num
			},
        });
    };

    return { game, init, play, history, setMulti, setBet, setWin, setRoll, setBetAmount, setStopProfit, setStopLoss, setLock };
}

const ProvideGame: FC<any> = ({ children }) => {

  const game: GameContext = useProvideGame();

  return(
    <gameContext.Provider value={game}>
      {children}
    </gameContext.Provider>
  );
};

export default ProvideGame;