// import { useParams } from "react-router-dom";
import GamePanel from "../components/GamePanel";


export default function Game() {

    // const { gameId } = useParams();

    return (
        <div className='gameContainer'>
            <GamePanel />
        </div>
    )
}