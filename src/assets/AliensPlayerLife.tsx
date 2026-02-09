import { pathFromBezierCurve } from "../utils/formulas";
import type { cubicBezierCurve } from "../utils/types";


interface AliensPlayerLifeProps {
    position: {
        x: number;
        y: number;
    };
}

const AliensPlayerLife = (props: AliensPlayerLifeProps) => {
    const style = {
        fill: '#da0d15',
        stroke: '#a51708',
        strokeWidth: '2px',
    }

    const leftSideCurve: cubicBezierCurve = {
        initialAxis: {
            x: props.position.x,
            y: props.position.y,
        },
        initialControlPoint: {
            x: -20,
            y: -20
        },
        endingControlPoint: {
            x: -40,
            y: 0,
        },
        endingAxis: {
            x: 0,
            y: 40,
        },
    }

    const rightSideCurve: cubicBezierCurve = {
        initialAxis: {
            x: props.position.x,
            y: props.position.y,
        },
        initialControlPoint: {
            x: 20,
            y: -20,
        },
        endingControlPoint: {
            x: 40,
            y: 10,
        },
        endingAxis: {
            x: 0,
            y: 40,
        },
    };

    return (
        <g filter='url(#shadow)'>
            <path
                style={style}
                d={pathFromBezierCurve(leftSideCurve)}
            />
            <path
                style={style}
                d={pathFromBezierCurve(rightSideCurve)}
            />
        </g>
    )
}

export default AliensPlayerLife