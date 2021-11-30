import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

import { DataType } from '../routes/Game';

const questionsBank = {
  1: {
    question: '你是男是女？',
    answers: [
      {
        text: '男',
        correct: true,
      },
      {
        text: '女',
        correct: true,
      },
      {
        text: '待续中。。',
        correct: false,
      },
    ],
  },
  2: {
    question: 'FGA 今年几岁？',
    answers: [
      {
        text: '50岁',
        correct: false,
      },
      {
        text: '17岁',
        correct: false,
      },
      {
        text: '42岁',
        correct: true,
      },
    ],
  },
  3: {
    question: '你心目中最帅的领袖是？？',
    answers: [
      {
        text: 'Ps. Daniel Chong',
        correct: true,
      },
      {
        text: '张立锋',
        correct: true,
      },
      {
        text: 'Chong Lik Foong',
        correct: true,
      },
    ],
  },
  4: {
    question: '如果你跑赢了第三名，你会是第几名？',
    answers: [
      {
        text: '第一名',
        correct: false,
      },
      {
        text: '第二名',
        correct: false,
      },
      {
        text: '第三名',
        correct: true,
      },
    ],
  },
  5: {
    question: 'Json Low 的中文名是？',
    answers: [
      {
        text: '刘燊光',
        correct: true,
      },
      {
        text: '刘备',
        correct: false,
      },
      {
        text: '刘圣光',
        correct: false,
      },
    ],
  },
  6: {
    question: '圣经一共有多少卷书？',
    answers: [
      {
        text: '56卷',
        correct: false,
      },
      {
        text: '66卷',
        correct: true,
      },
      {
        text: '76卷',
        correct: false,
      },
    ],
  },
  7: {
    question: '立锋牧师最想喝的水是什么水？',
    answers: [
      {
        text: '伯利恒城门旁的井水',
        correct: true,
      },
      {
        text: 'Kopi kaw kaw kaw',
        correct: false,
      },
      {
        text: '意大利高级清水',
        correct: false,
      },
    ],
  },
};

enum AnsweredState {
  'None',
  'Correct',
  'Wrong',
}

export const GameComp: React.FC<DataType> = ({ gameNo }) => {
  const question: typeof questionsBank[1] | null = questionsBank[gameNo] ?? null;
  const [selected, setSelected] = useState<string>('');
  const [correct, setCorrect] = useState<AnsweredState>(AnsweredState.None);

  useEffect(() => {
    setSelected('');
    setCorrect(AnsweredState.None);
  }, [gameNo]);

  if (!question)
    return (
      <div className="absolute w-full text-center text-2xl self-center text-white z-3">Error</div>
    );

  return (
    <div className="absolute self-center w-full z-3">
      <div className="mx-auto bg-grey-shade1 rounded-t-xl w-300px relative p-3 flex items-center">
        {correct === AnsweredState.Correct ? (
          <TiTick className="w-9 h-9 text-green-300 absolute right-5 focus-within:outline-none" />
        ) : correct === AnsweredState.Wrong ? (
          <ImCross className="w-7 h-7 text-red-500 absolute right-5 focus-within:outline-none" />
        ) : null}
        <p className="chibold text-2xl text-white">问题 {gameNo}</p>
      </div>
      <div className="mx-auto bg-grey-border rounded-b-xl w-300px p-3">
        <p className="chi text-white text-center  text-xl mb-2">{question.question}</p>
        <div className={`grid grid-cols-1 gap-2`}>
          {question.answers.map((q) => (
            <button
              className={`px-2 w-full rounded-lg transition py-1 ${
                selected !== q.text
                  ? 'bg-[#30FFFF] hover:bg-[#30cbff] text-black'
                  : q.correct && selected === q.text
                  ? 'bg-[#21c51e] text-white'
                  : 'bg-red-500 text-white '
              }`}
              disabled={selected !== ''}
              key={q.text}
              onClick={() => {
                setSelected(q.text);
                q.correct ? setCorrect(AnsweredState.Correct) : setCorrect(AnsweredState.Wrong);
              }}
            >
              {q.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
