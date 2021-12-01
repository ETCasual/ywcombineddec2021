import { ref, set, increment } from '@firebase/database';
import React, { useState } from 'react';
import Select from 'react-select';
import { useDatabase, useDatabaseObjectData } from 'reactfire';

import { satelliteLocationsSelect } from '@/features/game/components/SignUpForm';
import { useGame } from '@/hooks/useGame';

export const AdminPanel: React.FC = () => {
  const { user } = useGame();
  const [location, setLocation] = useState<string>(user.location ?? 'Sky');
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const pushGameRef = ref(dbRef, `/${location}`);

  const validate: (no: number) => number = (no: number) => {
    if (no < 0 || no > 11) return 0;
    return no;
  };

  const nextQuestion = () => {
    return set(pushGameRef, increment(1));
  };

  const prevQuestion = () => {
    return set(pushGameRef, increment(-1));
  };

  const gotoQuestion = (no: number) => {
    return set(pushGameRef, validate(no));
  };

  const { status, data } = useDatabaseObjectData(gameRef);

  return status === 'success' ? (
    <div className="grid grid-cols-2 w-[100vw] h-[100vh] gap-3 p-3 text-black text-2xl">
      <div className="flex-col p-5 text-center col-span-2 w-full h-full rounded-xl bg-yellow-500 transition items-center">
        <p>{'Current Question: ' + (data[location] == 11 ? 'Blast' : data[location])}</p>
        <p className="my-3 text-3xl"> {'Current Location: ' + location}</p>
        <Select
          options={satelliteLocationsSelect}
          defaultValue={satelliteLocationsSelect[4]}
          className="text-black"
          placeholder="Watch Party Location"
          onChange={(item) => setLocation(item.value)}
        />
      </div>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] <= 0}
        onClick={() => (data[location] !== 0 ? prevQuestion() : null)}
      >
        Previous Question
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] >= 11}
        onClick={() => (data[location] !== 11 ? nextQuestion() : null)}
      >
        Next Question
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 1}
        onClick={() => (data[location] !== 1 ? gotoQuestion(1) : null)}
      >
        Go To 1
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 2}
        onClick={() => (data[location] !== 2 ? gotoQuestion(2) : null)}
      >
        Go To 2
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 3}
        onClick={() => (data[location] !== 3 ? gotoQuestion(3) : null)}
      >
        Go To 3
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 4}
        onClick={() => (data[location] !== 4 ? gotoQuestion(4) : null)}
      >
        Go To 4
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 5}
        onClick={() => (data[location] !== 5 ? gotoQuestion(5) : null)}
      >
        Go To 5
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 6}
        onClick={() => (data[location] !== 6 ? gotoQuestion(6) : null)}
      >
        Go To 6
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 7}
        onClick={() => (data[location] !== 7 ? gotoQuestion(7) : null)}
      >
        Go To 7
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 8}
        onClick={() => (data[location] !== 8 ? gotoQuestion(8) : null)}
      >
        Go To 8
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 9}
        onClick={() => (data[location] !== 9 ? gotoQuestion(9) : null)}
      >
        Go To 9
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data[location] == 10}
        onClick={() => (data[location] !== 10 ? gotoQuestion(10) : null)}
      >
        Go To 10
      </button>
      <button
        className="w-full h-full col-span-2 rounded-xl bg-red-600 text-white"
        disabled={data[location] == 11}
        onClick={() => (data[location] !== 11 ? gotoQuestion(11) : null)}
      >
        BLAST
      </button>
    </div>
  ) : null;
};
