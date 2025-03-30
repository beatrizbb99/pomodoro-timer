import React from "react";
import { useTimerContext } from "@/context/TimerContext";
import { TimerState } from "@/enum/timer";
import { Phase } from "@/enum/phase";
import { VscDebugRestart } from "react-icons/vsc";

const Timer: React.FC = () => {
    const { timerState, timeLeft, sessionNumber, startTimer, stopTimer, resetTimer, phase } = useTimerContext();

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="text-center">
            <div className="flex justify-evenly items-center p-4">
                <h2 className="text-2xl text-gray-600">{phase === Phase.Focus ? "Focus" : "Break"}</h2>
                <h2 className="text-sm text-gray-500">Session #{sessionNumber}</h2>
            </div>
            <h1 className="text-9xl text-white font-quantico font-bold w-99 flex items-center justify-center">
                {formatTime(timeLeft)}
            </h1>
            <div className="mt-5 flex items-center justify-center gap-x-5">
                <button
                    onClick={() => {
                        if (timerState === TimerState.Running) stopTimer();
                        else startTimer();
                    }}
                    className="bg-rose-800 text-white w-20 h-10 rounded"
                >
                    {timerState === TimerState.Running ? "Pause" : "Play"}
                </button>
                <button
                    onClick={() => resetTimer("Timer will be reset.")}
                    className="flex items-center justify-center text-xl bg-amber-950 text-white w-10 h-10 rounded"
                >
                    <VscDebugRestart />
                </button>
            </div>
        </div>
    );
};

export default Timer;