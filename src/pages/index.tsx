import { TimerContextProvider } from '@/context/TimerContext';

import ColorDropdown from '@/components/ColorDropdown';
import SoundDropdown from '@/components/SoundDropdown';
import PomodoroTimer from '@/components/PomodoroTimer';
import Coffee from '@/components/animations/Coffee';


function App() {
    return (
        <div className="App relative min-h-screen flex flex-col items-center">
            <div className="absolute top-0 left-0 right-0 flex justify-between p-8 z-10">
                <ColorDropdown />
                <SoundDropdown />
            </div>
            <TimerContextProvider>
                <div className="flex flex-1 items-center justify-center">
                    <PomodoroTimer />
                </div>
                <div className="absolute bottom-10 right-20">
                    <Coffee />
                </div>
            </TimerContextProvider>
        </div>
    );
}

export default App;