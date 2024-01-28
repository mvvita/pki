import './style.sass'
import { Link } from 'react-router-dom'

const Footer = () => {
	return <div className='Footer'>
		<div className='Footer__links'>
			<div>
				<div className='FooterLinkDescription'>Korisni linkovi</div>
				<div className='FooterLink'><Link to='/articles'>Nasi artikli</Link></div>
				<div className='FooterLink'><Link to='/login'>Prijava</Link></div>
				<div className='FooterLink'><Link to='/register'>Registracija</Link></div>
			</div>
			<div>
				<div className='FooterLinkDescription'>Nase drustvene mreze</div>
				<div className='FooterLink'><a href='https://www.instagram.com'>Instagram</a></div>
				<div className='FooterLink'><a href='https://www.facebook.com'>Facebook</a></div>
			</div>
			<div>
				<div className='FooterLinkDescription'>O nama</div>
				<div className='FooterLink'><a href='tel:+381432323'>+381432323</a></div>
				<div className='FooterLink'><a href='https://maps.google.com'>Bulevar Kralja Aleksandra 192</a></div>
			</div>
		</div>
		<div className='Footer__copyright'>COPYRIGHT 2023</div>
	</div>
}

export default Footer