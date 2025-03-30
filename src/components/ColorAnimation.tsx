import React from 'react';

interface ColorAnimationProps {
    isAnimated: boolean;
    onAnimationChange: (isAnimating: boolean) => void;
}

const ColorAnimation: React.FC<ColorAnimationProps> = ({ isAnimated, onAnimationChange }) => {

    return (
        <div className="flex items-center justify-between my-3">
            <h1>Animate Background</h1>
            <button
                onClick={() => onAnimationChange(!isAnimated)}
                className="text-sm bg-rose-800 text-white px-4 py-2 rounded ml-4"
            >
                {isAnimated ? 'Stop' : 'Start'}
            </button>
        </div>
    );
};

export default ColorAnimation;