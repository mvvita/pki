import './style.sass'
import Button from '../../ui/Button'
import {Link, useNavigate} from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return <div className="Footer">
        <div className='Footer__links'>
            <div>
                <div className='FooterLinkDescription'>Korisni linkovi</div>
                <div className='FooterLink'><Link to='/'>Nasi artikli</Link></div>
                <div className='FooterLink'><Link to='/'>Prijava</Link> </div>
                <div className='FooterLink'><Link to='/'>Registracija</Link> </div>
            </div>
            <div>
                <div className='FooterLinkDescription'>Nase drustvene mreze</div>
                <div className='FooterLink'><Link to='/'>Instagram</Link> </div>
                <div className='FooterLink'><Link to='/'>Facebook</Link> </div>
            </div>
            <div>
                <div className='FooterLinkDescription'>O nama</div>
                <div className='FooterLink'><Link to='/'>+381432323</Link> </div>
                <div className='FooterLink'><Link to='/'>Bulevar Kralja Aleksandra 192</Link> </div>
            </div>
        </div>
        <div className='Footer__copyright'>COPYRIGHT 2023</div>
    </div>
}

export default Footer