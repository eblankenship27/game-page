import AliensFlyingObjectBase from "./AliensFlyingObjectBase";
import AliensFlyingObjectTop from "./AliensFlyingObjectTop";

interface AliensFlyingObjectProps {
    position: {
        x: number;
        y: number
    }
}

const AliensFlyingObject = (props: AliensFlyingObjectProps) => {
    return (
        <g>
            <AliensFlyingObjectBase position={props.position} />
            <AliensFlyingObjectTop position={props.position} />
        </g>
    )
}

export default AliensFlyingObject 