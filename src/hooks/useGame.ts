import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type GameState = {
  user: {
    name: string;
    cg: string;
  };
  gameNo: number;
  points: number;
  initState: (
    state: Omit<Omit<Omit<Omit<GameState, 'clear'>, 'initState'>, 'setGame'>, 'setInfo'>
  ) => void;
  clear: () => void;
  setGame: (gameNo: number) => void;
  setInfo: (name: string, cg: string) => void;
};

const createState: StateCreator<GameState> = (set) => ({
  user: {
    name: null,
    cg: null,
  },
  gameNo: 0,
  points: 0,
  initState: ({ user: { name, cg }, gameNo, points }) =>
    set({ user: { name, cg }, gameNo, points }),
  clear: () => set({ user: { name: null, cg: null }, gameNo: 0, points: 0 }),
  setGame: (gameNo) => set({ gameNo }),
  setInfo: (name, cg) => set({ user: { name, cg }, gameNo: 1 }),
});

export const useGame = create(persist(createState, { name: 'yw-combined-game' }));
