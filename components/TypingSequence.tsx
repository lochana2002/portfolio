"use client";

import { useEffect, useState } from "react";

export default function TypeSequence() {
  const text1 = "Undergraduate Software Engineer";
  const text2 = "Full-Stack Web Developer";

  const [text, setText] = useState("");
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const type = (target: string, done: () => void) => {
      setTyping(true);
      i = 0;

      const run = () => {
        if (i <= target.length) {
          setText(target.slice(0, i));
          i++;
          timeout = setTimeout(run, 70);
        } else {
          setTyping(false);
          setTimeout(done, 800);
        }
      };

      run();
    };

    if (step === 0) {
      type(text1, () => setStep(1));
    }

    if (step === 1) {
      setText("");
      setTimeout(() => setStep(2), 300);
    }

    if (step === 2) {
      type(text2, () => setStep(3));
    }

    if (step === 3) {
      setText("");
      setTimeout(() => setStep(0), 400);
    }

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <p className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent mb-4 w-fit">
      {text}

      {/* Cursor */}
      <span
        className={`ml-1 border-r-2 border-blue-600 ${
          typing ? "animate-pulse" : "opacity-0"
        }`}
      >
        &nbsp;
      </span>
    </p>
  );
}