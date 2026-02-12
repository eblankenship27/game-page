import AlienCannonBall from "./AliensCannonBall";
import AliensCannonBase from "./AliensCannonBase";
import AliensCannonPipe from "./AliensCannonPipe";
import AliensGround from "./AliensGround";
import AliensSky from "./AliensSky";

import React from "react";
import CurrentScore from "./CurrentScore";
import AliensFlyingObject from "./AliensFlyingObject";
import AliensPlayerLife from "./AliensPlayerLife";

interface AliensCanvasProps {
    angle: number;
    gameWidth: number;
    gameHeight: number;
    trackMouse: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};


const AliensCanvas = (props: AliensCanvasProps) => {
    const gameHeight = 1200
    const viewBox = `${props.gameWidth / -2} ${100 - gameHeight} ${props.gameWidth} ${gameHeight}`;

    const style = {
        border: '1px solid black',
        width: `${props.gameWidth / 2}px`,
        height: `${props.gameHeight / 2}px`,
    };

    return (
        <svg
            id="aliens-shooter-canvas"
            preserveAspectRatio="xMaxYMax"
            onMouseMove={props.trackMouse}
            viewBox={viewBox}
            style={style}
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
            <AliensFlyingObject position={{ x:-150, y:-300}} />
            <AliensFlyingObject position={{ x:150, y:-300}} />
            <AliensPlayerLife position={{ x: -300, y: 35}} />
        </svg>
    )
}

export default AliensCanvas