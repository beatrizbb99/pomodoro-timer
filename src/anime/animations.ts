import anime from "animejs";

export const createBreakAnimation = (
    coffeeRef: React.RefObject<SVGPathElement | null>,
    iceRef: React.RefObject<SVGGElement | null>,
    setBreakTlCompleted: (state: boolean) => void
) => {
    if (!coffeeRef.current || !iceRef.current) return null;

    return anime.timeline({ easing: "linear", autoplay: false })
        .add({
            targets: coffeeRef.current,
            d: [
                "M20 477H98 178L177.587 486.467H20.239Z",
                "M7.12671 98.6702H98.913H190.699L177.587 486.467H20.239Z"
            ],
            opacity: 1,
            duration: 3000
        })
        .add({
            targets: iceRef.current,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 2000,
            complete: () => setBreakTlCompleted(true)
        });
};

export const createFocusAnimation = (
    coffeeRef: React.RefObject<SVGPathElement | null>,
    iceRef: React.RefObject<SVGGElement | null>,
    workTime: number
) => {
    if (!coffeeRef.current || !iceRef.current) return null;

    const iceAnimation = anime.timeline({
        autoplay: false,
        easing: "linear",
        duration: workTime * 60 * 1000,
    }).add({
        targets: iceRef.current,
        translateY: [0, 200],
        opacity: [1, 0],
        duration: (workTime * 60 * 1000) / 2
    })
        .add({
            targets: iceRef.current,
            duration: (workTime * 60 * 1000) / 2,
        });

    const coffeeAnimation = anime({
        targets: coffeeRef.current,
        d: [
            "M7.12671 98.6702H98.913H190.699L177.587 486.467H20.239Z",
            "M20 477H98 178L177.587 486.467H20.239Z",
        ],
        duration: workTime * 60 * 1000,
        easing: "linear",
        autoplay: false,
        complete: () => {
            if (coffeeRef.current) {
                coffeeRef.current.style.opacity = "0";
            }
        }
    });

    return { ice: iceAnimation, coffee: coffeeAnimation };
};


const randomPastelColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${Math.min(255, r + 127)}, ${Math.min(255, g + 127)}, ${Math.min(255, b + 127)})`;
};

export const createBackgroundAnimation = () => {
    const newColorOne = randomPastelColor();
    const newColorTwo = randomPastelColor();
    const newColorThree = randomPastelColor();
    const gradient = `linear-gradient(90deg, ${newColorOne}, ${newColorTwo}, ${newColorThree})`;

    return anime({
        targets: document.body,
        background: [document.body.style.background, gradient],
        duration: 3000,
        easing: 'easeInOutQuad',
        complete: () => {
            document.body.style.background = gradient;
        },
    });
};
