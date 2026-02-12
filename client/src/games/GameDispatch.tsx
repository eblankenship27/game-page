import type { JSX } from "react/jsx-runtime";
import AliensShooter from "./AlienShooter";
import './GameDispatch.css';

// interface GameDispatchProps {
//     userPlayerIndex: number;
//     gameId: string;
// }

export default function GameDispatch(): JSX.Element {
    return (
        <AliensShooter />
    )
}