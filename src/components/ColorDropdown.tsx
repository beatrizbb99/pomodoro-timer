import React, { useEffect, useRef, useState } from 'react';
import { FaBrush } from 'react-icons/fa6';
import ColorPicker from './ColorPicker';
import ColorAnimation from './ColorAnimation';
import { createBackgroundAnimation } from '@/anime/animations';

const ColorDropdown = () => {
    const [isConfiguringBg, setIsConfiguringBg] = useState(false);
    const [color, setColor] = useState('#91cf98');
    const [isAnimated, setIsAnimated] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleBgConfig = () => {
        setIsConfiguringBg((prev) => !prev);
    };

    useEffect(() => {
        document.body.style.transition = 'background 1s ease';
        document.body.style.background = `linear-gradient(90deg, ${color}, ${color}, ${color})`; // make monochrome background gradient. necessary for animation.
    }, [color]);

    useEffect(() => {
        if (isAnimated) {
            createBackgroundAnimation();
            intervalRef.current = setInterval(createBackgroundAnimation, 10000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAnimated]);

    return (
        <div className={`rounded-lg flex ${isConfiguringBg ? 'bg-black' : 'bg-transparent'}`}>
            <button
                onClick={handleBgConfig}
                className="flex items-center justify-center w-12 h-12 bg-black rounded-full text-white"
            >
                <FaBrush />
            </button>
            {isConfiguringBg && (
                <div className='p-4 h-50 text-sm text-white font-bold'>
                    <ColorPicker color={color} onColorChange={setColor} />
                    <ColorAnimation
                        isAnimated={isAnimated}
                        onAnimationChange={setIsAnimated}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorDropdown;