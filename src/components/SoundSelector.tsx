import { ambienceSounds, effectsSounds, workSound, breakSound, getCurrentVolume } from '@/sounds/sounds';
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import VolumeSlider from './VolumeSlider';


interface SoundSelectorProps {
    selectedAmbience: string;
    setSelectedAmbience: React.Dispatch<React.SetStateAction<string>>;
    effectStates: { [key: string]: boolean };
    setEffectStates: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    sessionIsMuted: boolean;
    setSessionIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SoundSelector: React.FC<SoundSelectorProps> = ({ selectedAmbience, setSelectedAmbience, effectStates, setEffectStates, sessionIsMuted, setSessionIsMuted }) => {
    
    const playAmbienceSound = (sound: string) => {
        if (selectedAmbience && ambienceSounds[selectedAmbience]) {
            ambienceSounds[selectedAmbience].stop();
        }

        if(sound !== '') {
            ambienceSounds[sound].play();
        }
        setSelectedAmbience(sound);
    };

    const toggleEffectSound = (effect: string) => {
        if (effectStates[effect]) {
            effectsSounds[effect].stop();
            setEffectStates((prev) => ({ ...prev, [effect]: false }));
        } else {
            effectsSounds[effect].play();
            setEffectStates((prev) => ({ ...prev, [effect]: true }));
        }
    };

    const volumeSessions = () => {
        if (sessionIsMuted) {
            workSound.volume(1);
            breakSound.volume(1);
        } else {
            workSound.volume(0);
            breakSound.volume(0);
        }
        setSessionIsMuted(!sessionIsMuted);
    };

    return (
        <div>
            <select
                className='bg-white text-black rounded-md p-2'
                onChange={(e) => {
                    const newValue = e.target.value;
                    if (newValue !== selectedAmbience) {
                        playAmbienceSound(newValue);
                    }
                }}
                value={selectedAmbience}
            >
                <option value=''>Select an ambience sound</option>
                {Object.keys(ambienceSounds).map((sound) => (
                    <option className='text-black' key={sound} value={sound}>
                        {sound.charAt(0).toUpperCase() + sound.slice(1)}
                    </option>
                ))}
            </select>
            <div className='flex h-10'>
            {selectedAmbience && (< VolumeSlider sound={ambienceSounds[selectedAmbience]} initialVolume={getCurrentVolume(ambienceSounds[selectedAmbience])} />)}
            </div>
            <hr className='text-gray-700 p-1' />
            <div className='text-white'>
                <h2>Choose Effect-Sounds:</h2>
                {Object.keys(effectsSounds).map((effect) => (
                    <div className="py-2" key={effect}>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={effectStates[effect] || false}
                                    onChange={() => toggleEffectSound(effect)}
                                    className="mr-2 appearance-none checked:bg-rose-800 checked:border-transparent border-2 border-gray-500 rounded-full w-4 h-4"
                                />
                                {effect.charAt(0).toUpperCase() + effect.slice(1)}
                            </label>
                            {effectStates[effect] && (
                                <div className='mr-10 w-20'>
                                    <VolumeSlider sound={effectsSounds[effect]} initialVolume={getCurrentVolume(effectsSounds[effect])}/>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <hr className='text-gray-700 p-1' />
            <div className='flex items-center text-white'>
                <h2>Mute Session Sounds</h2>
                <button onClick={volumeSessions} className='flex items-center justify-center border-white border-1 text-xl w-7 h-7 rounded-full mx-4'>
                    {sessionIsMuted ? <GiSoundOff /> : <GiSoundOn />}
                </button>
            </div>

        </div>
    );
};

export default SoundSelector;