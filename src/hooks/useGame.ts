import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type GameState = {
  user: {
    name: string;
    cg: string;
  };
  gameStarted: boolean;
  points: number;
  initState: (
    state: Omit<Omit<Omit<Omit<GameState, 'clear'>, 'initState'>, 'setGame'>, 'setInfo'>
  ) => void;
  clear: () => void;
  setGame: (gameStarted: boolean) => void;
  setInfo: (name: string, cg: string) => void;
};

const createState: StateCreator<GameState> = (set) => ({
  user: {
    name: null,
    cg: null,
  },
  gameStarted: false,
  points: 0,
  initState: ({ user: { name, cg }, gameStarted, points }) =>
    set({ user: { name, cg }, gameStarted, points }),
  clear: () => set({ user: { name: null, cg: null }, gameStarted: false, points: 0 }),
  setGame: (gameStarted) => set({ gameStarted }),
  setInfo: (name, cg) => set({ user: { name, cg }, gameStarted: true }),
});

export const useGame = create(persist(createState, { name: 'yw-combined-game' }));
