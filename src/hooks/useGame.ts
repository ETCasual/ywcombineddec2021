import create, { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

type GameState = {
  user: {
    name: string;
    cg: string;
    location: string;
  };
  points: number;
  initState: (
    state: Omit<Omit<Omit<Omit<GameState, 'clear'>, 'initState'>, 'setGame'>, 'setInfo'>
  ) => void;
  clear: () => void;
  setInfo: (name: string, cg: string, location: string) => void;
};

const createState: StateCreator<GameState> = (set) => ({
  user: {
    name: null,
    cg: null,
    location: null,
  },
  points: 0,
  initState: ({ user: { name, cg, location }, points }) =>
    set({ user: { name, cg, location }, points }),
  clear: () => set({ user: { name: null, cg: null, location: null }, points: 0 }),
  setInfo: (name, cg, location) => set({ user: { name, cg, location } }),
});

export const useGame = create(persist(createState, { name: 'yw-combined-game' }));
