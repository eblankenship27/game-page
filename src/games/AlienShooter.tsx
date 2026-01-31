import { useEffect, useState } from "react";
import AliensCanvas from "../assets/AliensCanvas";
import { useDispatch, useSelector } from "react-redux";
import { moveObjects, selectAngle } from "../reducers/AlienShooterReducer";
import { getAliensCanvasPosition } from "../utils/formulas";


export default function AliensShooter() {

    const dispatch = useDispatch()
    const angle = useSelector(selectAngle);

    const [canvasMousePosition, setCanvasMousePosition] = useState({ x: 0, y: 0});

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveObjects(canvasMousePosition))
        }, 10)
        return () => clearInterval(interval)
    }, [canvasMousePosition, dispatch])

    const trackMouse = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const position = getAliensCanvasPosition(event)
        if (position) {
            setCanvasMousePosition(position);
        }
    }


    return (
        <div className="content spacedSection">
            <AliensCanvas
                angle={angle}
                trackMouse={event => (trackMouse(event))}
            />
        </div>
    )
}