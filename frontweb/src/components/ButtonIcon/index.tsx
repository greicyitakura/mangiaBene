import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({text} : Props) => {
    return (
        <div className='btn-container'>
        <button className="btn btn-success btn-icon">
            <h6>{text}</h6>
        </button>
        </div>
    )
} 
export default ButtonIcon;