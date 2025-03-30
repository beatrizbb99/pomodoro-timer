import { useEffect, useRef, useState } from "react";
import { useTimerContext } from "@/context/TimerContext";
import { TimerState } from "@/enum/timer";
import IcedCoffee from "./svg/IcedCoffee";
import anime from "animejs";
import { Phase } from "@/enum/phase";
import { createBreakAnimation, createFocusAnimation } from "@/anime/animations";

const Coffee = () => {
    const { timerState, workTime, timeLeft, phase } = useTimerContext();
    const iceRef = useRef<SVGGElement | null>(null);
    const coffeeRef = useRef<SVGPathElement | null>(null);
    const focusAnimationRef = useRef<{ ice: anime.AnimeInstance; coffee: anime.AnimeInstance } | null>(null);
    const breakTlRef = useRef<anime.AnimeInstance | null>(null);
    const [breakTlCompleted, setBreakTlCompleted] = useState<boolean>(false);

    useEffect(() => {
        breakTlRef.current = createBreakAnimation(coffeeRef, iceRef, setBreakTlCompleted);
    }, []);

    useEffect(() => {
        focusAnimationRef.current = createFocusAnimation(coffeeRef, iceRef, workTime);
        return () => {
            if (focusAnimationRef.current) {
                focusAnimationRef.current.ice.pause();
                focusAnimationRef.current.coffee.pause();
            }
        };
    }, [workTime]);

    useEffect(() => {
        if (!focusAnimationRef.current) return;
        if (!breakTlRef.current) return;
        if (coffeeRef.current) { coffeeRef.current.style.opacity = "100"; }

        if (timerState === TimerState.Paused) {
            focusAnimationRef.current.ice.pause();
            focusAnimationRef.current.coffee.pause();
        } else if (timerState === TimerState.Running && phase === Phase.Focus) {
            setBreakTlCompleted(false);
            focusAnimationRef.current.ice.play();
            focusAnimationRef.current.coffee.play();
        } else if (!breakTlCompleted && phase === Phase.Break) {
            breakTlRef.current.play();
        } else if (timerState === TimerState.Restarted) {
            focusAnimationRef.current.ice.restart();
            focusAnimationRef.current.coffee.restart();
            focusAnimationRef.current.ice.pause();
            focusAnimationRef.current.coffee.pause();
        }
    }, [timerState, phase]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (timerState !== TimerState.Running) return;
            if (phase === Phase.Break) return;

            if (document.hidden) {
                if (focusAnimationRef.current) {
                    focusAnimationRef.current.ice.pause();
                    focusAnimationRef.current.coffee.pause();
                }
            } else {
                if (focusAnimationRef.current) {
                    const timeJump = (workTime * 60 * 1000) - (timeLeft * 1000);

                    focusAnimationRef.current.ice.seek(timeJump);
                    focusAnimationRef.current.ice.play();
                    focusAnimationRef.current.coffee.seek(timeJump);
                    focusAnimationRef.current.coffee.play();
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [timerState, phase, workTime, timeLeft]);

    return (
        <div className="relative">
            <IcedCoffee iceRef={iceRef} coffeeRef={coffeeRef} />
        </div>
    );
};

export default Coffee;
