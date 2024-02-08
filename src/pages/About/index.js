import './style.sass'
import { Link } from 'react-router-dom'
import Image from '../../ui/Image'

const About = () => {
	return (
		<div className='About'>
			<div className='About__imageContainer'>
				<div className='About__imageText'>
					<div>Vaše omiljene torte i kolači...</div>
					<div>
						... na jedan{' '}
						<Link className='AppLinkWhite' to='/articles'>
							klik
						</Link>{' '}
						od vas.
					</div>
				</div>
				<Image className='About__image' alt='noimg' src='backgroundImage'></Image>
			</div>

			<div className='About__content'>
				<h2 className='About__contentHeader'>O NAMA</h2>
				<div className='About__layout'>
					<div>
						<p className='About__paragraph'>
							Dobro došli u našu poslastičarnicu, gde tradicija i inovacija se susreću u svakom zalogaju. Naš
							asortiman uključuje klasične torte, sveže pripremljene kolače i domaće specijalitete, pripremljene sa
							mnogo ljubavi i pažnje. Posetite nas i otkrijte čaroliju slatkih ukusa koje smo pažljivo birali i
							kreirali za vas. Očekujemo vas sa osmehom i otvorenog srca da zajedno delimo radost slatkih trenutaka.
						</p>
						<p className='About__paragraph'>
							Mozete nas kontaktirati pomocu broja telefona{' '}
							<a href='tel:+38112324234' className='AppLink'>
								+38112324234
							</a>{' '}
							ili putem mejla{' '}
							<a href='mailto:slatkomir@etf.bg.ac.rs' className='AppLink'>
								slatkomir@etf.bg.ac.rs
							</a>
							.
						</p>
					</div>
					<div className='About__mapContainer'>
						<Image alt='noImg' className='About__map' src='map'></Image>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
