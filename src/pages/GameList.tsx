import { useNavigate } from "react-router-dom";


export default function GameList() {
    const navigate = useNavigate();

    return (
        <div className='content'>
            <div className='spacedSection'>
                <h2>All games</h2>
                <div>
                    <button className='primary narrow' onClick={() => navigate('/game/new')}>
                        Create New Game
                    </button>
                </div>
            </div>
        </div>
    )
}