import AlienCannonBall from "./AliensCannonBall";
import AliensCannonBase from "./AliensCannonBase";
import AliensCannonPipe from "./AliensCannonPipe";
import AliensGround from "./AliensGround";
import AliensSky from "./AliensSky";

import React from "react";
import CurrentScore from "./CurrentScore";

interface AliensCanvasProps {
    angle: number;
    trackMouse: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};


const AliensCanvas = (props: AliensCanvasProps) => {
    const viewBox = `${window.innerWidth / -2} ${100 - window.innerHeight} ${window.innerWidth} ${window.innerHeight}`;

    return (
        <svg
            id="aliens-shooter-canvas"
            preserveAspectRatio="xMaxYMax"
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <AliensSky />
            <AliensGround />
            <AliensCannonPipe rotation={props.angle} />
            <AliensCannonBase />
            <AlienCannonBall position={{ x: 0, y: -100}} />
            <CurrentScore score={15} />
        </svg>
    )
}

export default AliensCanvas