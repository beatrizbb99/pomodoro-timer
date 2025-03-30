import React from 'react';
import Timer from '@/components/Timer';
import { useTimerContext } from '@/context/TimerContext';

const PomodoroTimer = () => {
    const { onWorkTimeChange, onBreakTimeChange } = useTimerContext();
    
    return (
        <div className="flex flex-col items-center justify-center bg-gray-400/40 p-6 max-w-xl mx-auto rounded-lg shadow-lg">
            <h1 className="text-6xl font-bold mb-4 font-kanit text-white">Pomodoro Timer</h1>
            <div className="mb-4 text-gray-700">
                <label className="mr-2">
                    Focus:
                    <select onChange={(e) => onWorkTimeChange(Number(e.target.value))} className="ml-2">
                        <option value={25}>25 min</option>
                        <option value={30}>30 min</option>
                        <option value={40}>40 min</option>
                        <option value={50}>50 min</option>
                    </select>
                </label>
                <label className="ml-4">
                    Break:
                    <select onChange={(e) => onBreakTimeChange(Number(e.target.value))} className="ml-2">
                        <option value={5}>5 min</option>
                        <option value={10}>10 min</option>
                        <option value={15}>15 min</option>
                        <option value={20}>20 min</option>
                    </select>
                </label>
            </div>
            <Timer />
        </div>
    );
};

export default PomodoroTimer;