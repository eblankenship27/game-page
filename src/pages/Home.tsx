import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='content'>
            <div className='spacedSection'>
                <h1>WIP</h1>
                <div>
                    <h2>Recent Games</h2>
                    <div>
                        <button className='primary narrow' onClick={() => navigate('game/new')} >
                            Create New Game
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}