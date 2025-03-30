import React, { useEffect, useState } from 'react';

interface VolumeSliderProps {
    sound: Howl;
    initialVolume: number;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ sound, initialVolume }) => {
    const [volume, setVolume] = useState(initialVolume);
    
    useEffect(() => {
        setVolume(initialVolume);
    }, [initialVolume]);
    
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        sound.volume(newVolume);
    };


    return (
        <div className="flex items-center">
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="h-1 w-full bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
        </div>
    );
};

export default VolumeSlider;