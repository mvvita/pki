import './style.sass'
import Button from '../../ui/Button'
import {Link, useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const onLogin = () => {
        navigate('login')
    }
    return <div className="Header">
        <div className='Header__logo'>Slatkomir</div>
        <div className='Header__links'>
            <Link to='about'>O nama</Link>
            <Link to='articles'>Pregled artikala</Link>
            <Button onClick={onLogin} >Prijava</Button>
        </div>
    </div>
}

export default Header