import './StartGameButton.css'

interface StartGameButtonProps {
    onClick: () => void
};

const StartGameButton = (props: StartGameButtonProps) => {

    return (
        <button className='primary centered' onClick={props.onClick} >
            Tap to Start!
        </button>
    )
};

export default StartGameButton;