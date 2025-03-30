import React, { useState } from 'react';
import SoundSelector from './SoundSelector';
import { IoIosMusicalNote } from 'react-icons/io';


const SoundDropdown = () => {
    const [isConfiguringSound, setIsConfiguringSound] = useState(false);
    const [selectedAmbience, setSelectedAmbience] = useState<string>('');
    const [effectStates, setEffectStates] = useState<{ [key: string]: boolean }>({});
    const [sessionIsMuted, setSessionIsMuted] = useState(false);

    const handleSoundConfig = () => {
        setIsConfiguringSound((prev) => !prev);
    };

    return (
        <div className={`rounded-lg flex ${isConfiguringSound ? 'bg-black' : 'bg-transparent'}`}>
            {isConfiguringSound && (
                <div className='p-4 h-80'>
                    <SoundSelector 
                        selectedAmbience={selectedAmbience} 
                        setSelectedAmbience={setSelectedAmbience}
                        effectStates={effectStates}
                        setEffectStates={setEffectStates}
                        sessionIsMuted={sessionIsMuted}
                        setSessionIsMuted={setSessionIsMuted}
                    />
                </div>
            )}
            <button
                onClick={handleSoundConfig}
                className="flex items-center justify-center w-12 h-12 bg-black rounded-full text-white text-2xl"
            >
                <IoIosMusicalNote />
            </button>
        </div>
    );
};

export default SoundDropdown;