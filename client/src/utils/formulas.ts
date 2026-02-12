import type { cubicBezierCurve } from "./types";

export const pathFromBezierCurve = (cubicBezierCurve: cubicBezierCurve) => {
    const {
        initialAxis, 
        initialControlPoint, 
        endingControlPoint, 
        endingAxis,
    } = cubicBezierCurve;

    return `
        M${initialAxis.x} ${initialAxis.y}
        c ${initialControlPoint.x} ${initialControlPoint.y}
        ${endingControlPoint.x} ${endingControlPoint.y}
        ${endingAxis.x} ${endingAxis.y}
    `;
};

export const radiansToDegrees = (radians: number) => ((radians * 180) / Math.PI);

export const calculateSVGAngle = (x1: number, y1: number, x2: number, y2: number) => {
    if (x2 >= 0 && y2 >= 0) {
        return 90;
    }
    else if (x2 < 0 && y2 >= 0) {
        return -90;
    }

    const dividend = x2 - x1;
    const divisor = y2 - y1;
    const quotient = dividend / divisor;
    return radiansToDegrees(Math.atan(quotient)) * -1;
}

export const getAliensCanvasPosition = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const element = document.getElementById('aliens-shooter-canvas');
    if (element && element instanceof SVGSVGElement) {
        const svg: SVGSVGElement = element;
        const point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        const { x, y } = point.matrixTransform(svg.getScreenCTM()?.inverse());
        return { x: x, y: y };
    }
    return null;
}