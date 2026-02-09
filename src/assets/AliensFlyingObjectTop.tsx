import { pathFromBezierCurve } from "../utils/formulas";
import type { cubicBezierCurve } from "../utils/types";


interface AliensFlyingObjectTopProps {
    position: {
        x: number,
        y: number,
    };
}

const AliensFlyingObjectTop = (props: AliensFlyingObjectTopProps) => {
    const style = {
        fill: '#b6b6b6',
        stroke: '#7d7d7d',
    };

    const baseWidth = 40;
    const halfBase = 20;
    const height = 25;

    const curve: cubicBezierCurve = {
        initialAxis: {
            x: props.position.x - halfBase,
            y: props.position.y
        },
        initialControlPoint: {
            x: 10,
            y: -height
        },
        endingControlPoint: {
            x: 30,
            y: -height,
        },
        endingAxis: {
            x: baseWidth,
            y: 0,
        },
    }

    return (
        <path
            style={style}
            d={pathFromBezierCurve(curve)}
        />
    )

}

export default AliensFlyingObjectTop