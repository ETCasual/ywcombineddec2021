import { ref, set, increment } from '@firebase/database';
import React from 'react';
import { useDatabase, useDatabaseObjectData } from 'reactfire';

export const AdminPanel: React.FC = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/gameNo');

  const validate: (no: number) => number = (no: number) => {
    if (no < 0 || no > 8) return 0;
    return no;
  };

  const nextQuestion = () => {
    return set(gameRef, increment(1));
  };

  const prevQuestion = () => {
    return set(gameRef, increment(-1));
  };

  const gotoQuestion = (no: number) => {
    return set(gameRef, validate(no));
  };

  const { status, data } = useDatabaseObjectData<number>(gameRef);

  return status === 'success' ? (
    <div className="grid lg:grid-cols-3 grid-cols-2 w-[100vw] h-[100vh] gap-3 p-3 text-black text-3xl">
      <div className="flex text-center col-span-2 w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition items-center justify-center">
        {'Current Question: ' + JSON.stringify(data, null, 2)}
      </div>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data <= 0}
        onClick={() => (data !== 0 ? prevQuestion() : null)}
      >
        Previous Question
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data >= 8}
        onClick={() => (data !== 8 ? nextQuestion() : null)}
      >
        Next Question
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 1}
        onClick={() => (data !== 1 ? gotoQuestion(1) : null)}
      >
        Go To 1
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 2}
        onClick={() => (data !== 2 ? gotoQuestion(2) : null)}
      >
        Go To 2
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 3}
        onClick={() => (data !== 3 ? gotoQuestion(3) : null)}
      >
        Go To 3
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 4}
        onClick={() => (data !== 4 ? gotoQuestion(4) : null)}
      >
        Go To 4
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 5}
        onClick={() => (data !== 5 ? gotoQuestion(5) : null)}
      >
        Go To 5
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 6}
        onClick={() => (data !== 6 ? gotoQuestion(6) : null)}
      >
        Go To 6
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 7}
        onClick={() => (data !== 7 ? gotoQuestion(7) : null)}
      >
        Go To 7
      </button>
      <button
        className="w-full h-full rounded-xl bg-[#30ffff] hover:bg-[#30cbff] transition"
        disabled={data == 8}
        onClick={() => (data !== 8 ? gotoQuestion(8) : null)}
      >
        Blast
      </button>
    </div>
  ) : null;
};
