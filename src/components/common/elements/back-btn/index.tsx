
import { useNavigate } from 'react-router-dom';
import './back-btn.css'
const BackBtn = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => {return navigate(-1)}} className='link__back'>Go Back</button>
    )
}

export default BackBtn