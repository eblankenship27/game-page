import { useEffect, useState } from "react";
import AliensCanvas from "../assets/AliensCanvas";
import { useDispatch, useSelector } from "react-redux";
import { moveObjects, selectAngle } from "../hooks/AlienShooterReducer";
import { getAliensCanvasPosition } from "../utils/formulas";
import './AlienShooter.css';


export default function AliensShooter() {

    const dispatch = useDispatch()
    const angle = useSelector(selectAngle);

    const [canvasMousePosition, setCanvasMousePosition] = useState({ x: 0, y: 0});
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveObjects(canvasMousePosition))
        }, 10)
        return () => clearInterval(interval)
    }, [canvasMousePosition, dispatch])

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const trackMouse = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const position = getAliensCanvasPosition(event)
        if (position) {
            setCanvasMousePosition(position);
        }
    }

    return (
        <div className="canvas">
            <AliensCanvas
                angle={angle}
                trackMouse={event => (trackMouse(event))}
                gameWidth={screenWidth}
                gameHeight={screenHeight}
            />
        </div>
    )
}