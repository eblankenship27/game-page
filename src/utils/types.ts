

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