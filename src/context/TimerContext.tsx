import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { TimerState } from "@/enum/timer";
import { Phase } from "@/enum/phase";
import { workSound, breakSound } from "@/sounds/sounds";

interface TimerContextType {
    timerState: TimerState;
    setTimerState: React.Dispatch<React.SetStateAction<TimerState>>;
    timeLeft: number;
    sessionNumber: number;
    phase: Phase;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: (text?: string) => void;
    onWorkTimeChange: (newWorkTime: number) => void;
    onBreakTimeChange: (newBreakTime: number) => void;
    workTime: number;
    breakTime: number;
}

const TimerContext = createContext<TimerContextType | null>(null);

export const TimerContextProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [timerState, setTimerState] = useState<TimerState>(TimerState.Paused);
    const [workTime, setWorkTime] = useState<number>(25);
    const [breakTime, setBreakTime] = useState<number>(5);
    const [timeLeft, setTimeLeft] = useState<number>(workTime * 60);
    const [sessionNumber, setSessionNumber] = useState<number>(1);
    const [phase, setPhase] = useState<Phase>(Phase.Focus);
    const [elapsedTime, setElapsedTime] = useState<number>(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (timerState === TimerState.Running) {
            const startTime = Date.now() - elapsedTime * 1000;

            interval = setInterval(() => {
                const newElapsedTime = Math.floor((Date.now() - startTime) / 1000);
                const newTimeLeft = (phase === Phase.Focus ? workTime : breakTime) * 60 - newElapsedTime;

                if (newTimeLeft >= 0) {
                    setTimeLeft(newTimeLeft);
                    setElapsedTime(newElapsedTime);
                } else {
                    clearInterval(interval);
                    handleTimerEnd();
                }
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [timerState, phase]);

    const handleTimerEnd = () => {
        if (phase === Phase.Focus) {
            breakSound.play();
            setPhase(Phase.Break);
            setTimeLeft(breakTime * 60);
            setElapsedTime(0);
        } else {
            workSound.play();
            setPhase(Phase.Focus);
            setTimeLeft(workTime * 60);
            setSessionNumber(prev => prev + 1);
            setElapsedTime(0);
        }
    };

    const startTimer = () => {
        setTimerState(TimerState.Running);
    };

    const stopTimer = () => {
        setTimerState(TimerState.Paused);
    };

    const resetTimer = (text?: string) => {
        if (text) {
            if (!userConfirm(text)) {
                return;
            }
        }
        setSessionNumber(1);
        setPhase(Phase.Focus);
        setTimeLeft(workTime * 60);
        setElapsedTime(0);
        setTimerState(TimerState.Restarted);
    };

    const onWorkTimeChange = (newWorkTime: number) => {
        if (timerState === TimerState.Running) {
            if (!userConfirm("Timer will be reset if changes are made.")) {
                return;
            }
        }

        setWorkTime(newWorkTime);
        resetTimer();
        setTimeLeft(newWorkTime * 60);

    };

    const onBreakTimeChange = (newBreakTime: number) => {
        if (timerState === TimerState.Running) {
            if (!userConfirm("Timer will be reset if changes are made.")) {
                return;
            }
        }
        setBreakTime(newBreakTime);
        resetTimer();

    };

    const userConfirm = (text: string) => {
        const permitted = window.confirm(text);
        return permitted;
    };

    return (
        <TimerContext.Provider
            value={{
                timerState,
                setTimerState,
                timeLeft,
                sessionNumber,
                phase,
                startTimer,
                stopTimer,
                resetTimer,
                onWorkTimeChange,
                onBreakTimeChange,
                workTime,
                breakTime
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};

export const useTimerContext = () => {
    const context = useContext(TimerContext);
    if (context === null) {
        throw new Error("useTimerContext must be used within the TimerProvider.");
    }
    return context;
};