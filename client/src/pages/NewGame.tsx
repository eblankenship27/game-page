import { useNavigate } from "react-router-dom"


export default function NewGame() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/game/arvqervq')
    }

    return (
        <form className='content spacedSelection' onSubmit={handleSubmit}>
            <h2>Create new game</h2>
            <div>
                <select aria-label='Game selection'>
                    <option value=''>- Select a game -</option>
                    <option value='aliens'>Aliens Shooter</option>
                </select>
            </div>
            <div>
                <button className='primary narrow'>Create New Game</button>
            </div>
        </form>
    )
}