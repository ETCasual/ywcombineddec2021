import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type GameState = {
  user: {
    name: string;
    cg: string;
  };
  points: number;
  initState: (
    state: Omit<Omit<Omit<Omit<GameState, 'clear'>, 'initState'>, 'setGame'>, 'setInfo'>
  ) => void;
  clear: () => void;
  setInfo: (name: string, cg: string) => void;
};

const createState: StateCreator<GameState> = (set) => ({
  user: {
    name: null,
    cg: null,
  },
  points: 0,
  initState: ({ user: { name, cg }, points }) => set({ user: { name, cg }, points }),
  clear: () => set({ user: { name: null, cg: null }, points: 0 }),
  setInfo: (name, cg) => set({ user: { name, cg } }),
});

export const useGame = create(persist(createState, { name: 'yw-combined-game' }));
