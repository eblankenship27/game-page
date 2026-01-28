import GameDispatch from "../games/GameDispatch";


export default function GamePanel() {
    return (
        <div className='gamePanel'>
            <div className='gameRoster'>

            </div>
            <div className='gameFrame'>
                <GameDispatch />
            </div>
        </div>
    )
}