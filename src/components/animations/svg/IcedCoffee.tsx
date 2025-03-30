import React from "react";

interface IcedCoffeeProps {
    iceRef: React.RefObject<SVGGElement | null>;
    coffeeRef: React.RefObject<SVGPathElement | null>;
}


const IcedCoffee: React.FC<IcedCoffeeProps> = ({ coffeeRef, iceRef }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="219"
            height="501"
            fill="none"
            viewBox="0 0 219 501"
        >
            <g id="CoffeeCup">
                <path
                    id="Glass"
                    stroke="#fff"
                    strokeWidth="3"
                    d="M15.607 494.136 1.989 92.143a5.55 5.55 0 0 1 5.545-5.74h182.758a5.55 5.55 0 0 1 5.545 5.736v.004l-13.618 401.993a5.55 5.55 0 0 1-5.545 5.364H21.152a5.55 5.55 0 0 1-5.545-5.363z"
                ></path>
                <g id="Coffee" fillOpacity="0.95">
                    <path ref={coffeeRef} d="M7.1267 98.6702H98.913 190.699L177.587 486.467H20.239Z" fill="url(#paint0_linear_2_28)" fillOpacity="0.95" />
                </g>

                <g id="IceCubes" ref={iceRef}>
                    <g id="Ice">
                        <rect
                            id="Rectangle 1"
                            width="63.461"
                            height="63.461"
                            x="28.447"
                            y="136.135"
                            fill="#D9D9D9"
                            fillOpacity="0.93"
                            rx="1"
                            transform="rotate(-14.882 28.447 136.135)"
                        ></rect>
                        <rect
                            id="Rectangle 2"
                            width="49.358"
                            height="49.358"
                            x="37.073"
                            y="141.138"
                            fill="url(#paint2_linear_2_28)"
                            fillOpacity="0.9"
                            rx="1"
                            transform="rotate(-14.882 37.073 141.138)"
                        ></rect>
                        <g id="Vector 1" filter="url(#filter0_d_2_28)">
                            <path
                                stroke="#fff"
                                strokeOpacity="0.3"
                                strokeWidth="0.3"
                                d="m44.793 142.735 36.514-9.704a1 1 0 0 1 1.224.71l9.703 36.514"
                                shapeRendering="crispEdges"
                            ></path>
                        </g>
                    </g>
                    <g id="Ice_2">
                        <rect
                            id="Rectangle 1_2"
                            width="63.461"
                            height="63.461"
                            x="99.671"
                            y="105.768"
                            fill="#D9D9D9"
                            fillOpacity="0.93"
                            rx="1"
                            transform="rotate(6.996 99.671 105.768)"
                        ></rect>
                        <rect
                            id="Rectangle 2_2"
                            width="49.358"
                            height="49.358"
                            x="105.811"
                            y="113.625"
                            fill="url(#paint3_linear_2_28)"
                            fillOpacity="0.9"
                            rx="1"
                            transform="rotate(6.996 105.811 113.625)"
                        ></rect>
                        <g id="Vector 1_2" filter="url(#filter1_d_2_28)">
                            <path
                                stroke="#fff"
                                strokeOpacity="0.3"
                                strokeWidth="0.3"
                                d="m112.381 117.983 37.5 4.602a1 1 0 0 1 .87 1.114l-4.601 37.5"
                                shapeRendering="crispEdges"
                            ></path>
                        </g>
                        <g id="Vector 2" filter="url(#filter2_d_2_28)">
                            <path
                                stroke="#fff"
                                strokeOpacity="0.3"
                                strokeWidth="0.3"
                                d="m127.198 162.177-22.815-2.353a1 1 0 0 1-.892-1.097l2.553-24.755"
                                shapeRendering="crispEdges"
                            ></path>
                        </g>
                    </g>
                    <g id="Ice_3">
                        <rect
                            id="Rectangle 1_3"
                            width="63.461"
                            height="63.461"
                            x="72.503"
                            y="174.893"
                            fill="#D9D9D9"
                            fillOpacity="0.93"
                            rx="1"
                            transform="rotate(-3.57 72.503 174.893)"
                        ></rect>
                        <rect
                            id="Rectangle 2_3"
                            width="49.358"
                            height="49.358"
                            x="79.979"
                            y="181.492"
                            fill="url(#paint4_linear_2_28)"
                            fillOpacity="0.9"
                            rx="1"
                            transform="rotate(-3.57 79.98 181.492)"
                        ></rect>
                        <g id="Vector 1_3" filter="url(#filter3_d_2_28)">
                            <path
                                stroke="#fff"
                                strokeOpacity="0.3"
                                strokeWidth="0.3"
                                d="m77.558 178.818 54.454-3.396a1 1 0 0 1 1.061.935l2.747 44.041"
                                shapeRendering="crispEdges"
                            ></path>
                        </g>
                        <g id="Vector 2_2" filter="url(#filter4_d_2_28)">
                            <path
                                stroke="#fff"
                                strokeOpacity="0.3"
                                strokeWidth="0.3"
                                d="m121.289 231.674-40.885 2.049a1 1 0 0 1-1.049-.949l-1.665-33.243"
                                shapeRendering="crispEdges"
                            ></path>
                        </g>
                    </g>
                </g>
                <path
                    id="Straw"
                    fill="url(#paint5_linear_2_28)"
                    fillOpacity="0.8"
                    d="M205.647.188a.2.2 0 0 1 .255-.12l12.91 4.593a.2.2 0 0 1 .121.256L48.852 482.839a.2.2 0 0 1-.256.121l-12.909-4.594a.2.2 0 0 1-.121-.255z"
                ></path>
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_2_28"
                    x1="98.913"
                    x2="98.913"
                    y1="98.67"
                    y2="486.467"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8C6565"></stop>
                    <stop offset="1" stopColor="#261B1B"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_2_28"
                    x1="98.913"
                    x2="98.913"
                    y1="98.67"
                    y2="486.467"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8C6565"></stop>
                    <stop offset="1" stopColor="#261B1B"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_2_28"
                    x1="61.752"
                    x2="61.752"
                    y1="141.138"
                    y2="190.497"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9D9D9"></stop>
                    <stop offset="1" stopColor="#FFFBFB"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_2_28"
                    x1="130.49"
                    x2="130.49"
                    y1="113.625"
                    y2="162.983"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9D9D9"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_2_28"
                    x1="104.658"
                    x2="104.658"
                    y1="181.492"
                    y2="230.85"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9D9D9"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <linearGradient
                    id="paint5_linear_2_28"
                    x1="42.142"
                    x2="212.357"
                    y1="480.663"
                    y2="2.364"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9D9D9"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                </linearGradient>
                <filter
                    id="filter0_d_2_28"
                    width="55.624"
                    height="45.446"
                    x="40.755"
                    y="132.847"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_28"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_28"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter1_d_2_28"
                    width="46.547"
                    height="51.383"
                    x="108.362"
                    y="117.834"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_28"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_28"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter2_d_2_28"
                    width="31.877"
                    height="36.369"
                    x="99.336"
                    y="133.957"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_28"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_28"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter3_d_2_28"
                    width="66.421"
                    height="53.138"
                    x="73.549"
                    y="175.27"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_28"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_28"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter4_d_2_28"
                    width="51.756"
                    height="42.35"
                    x="73.54"
                    y="199.524"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_28"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_28"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
}
export default IcedCoffee;
