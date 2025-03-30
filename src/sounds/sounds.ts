import { Howl } from 'howler';

export const ambienceSounds: Record<string, Howl> = {
    rain: new Howl({ src: ['/sounds/ambience/rain.mp3'], html5: true, loop: true }),
    forest: new Howl({ src: ['/sounds/ambience/forest.mp3'], html5: true, loop: true }),
    ocean: new Howl({ src: ['/sounds/ambience/ocean.mp3'], html5: true, loop: true }),
};

export const effectsSounds: Record<string, Howl> = {
    writing: new Howl({ src: ['/sounds/effects/writing.mp3'], html5: true, loop: true }),
    typing: new Howl({ src: ['/sounds/effects/typing.mp3'], html5: true, loop: true }),
    coffee: new Howl({ src: ['/sounds/effects/coffee.mp3'], html5: true, loop: true}),
};

export const breakSound = new Howl({src: ['/sounds/sessions/break.mp3'], html5: true});

export const workSound = new Howl({src: ['/sounds/sessions/work.mp3'], html5: true});

export const setVolume = (sound: Howl, volume: number) => {
    sound.volume(volume);
};

export const getCurrentVolume = (sound: Howl) => {
    return sound.volume();
}

export const muteSound = (sound: Howl) => {
    sound.volume(0);
};

export const unmuteSound = (sound: Howl, previousVolume: number) => {
    sound.volume(previousVolume);
};