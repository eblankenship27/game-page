import type { AliensShooterView } from "../utils/games/aliensShooter.types";


export type svgCoord = {
    x: number,
    y: number,
};

export type cubicBezierCurve = {
    initialAxis: svgCoord,
    initialControlPoint: svgCoord,
    endingControlPoint: svgCoord,
    endingAxis: svgCoord,
}

export type TaggedGameView = 
    | { type: 'aliens', view: AliensShooterView}