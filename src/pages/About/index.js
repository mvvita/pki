import './style.sass'
import backgroundImage from '../Landing/[removal.ai]_eb8ebcc3-f3b9-432c-992d-e441ee26013a-candle-cupcake-happy-birthday-happy-birthday-wallpaper-preview-transformed.png'
import mapImage from './map.png'
import { Link } from 'react-router-dom'

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
				<img className='About__image' alt='noimg' src={backgroundImage}></img>
			</div>

			<div className='About__content'>
				<h2 className='About__contentHeader'>O NAMA</h2>
				<div className='About__layout'>
					<div>
						<p className='About__paragraph'>
							Ne zamerite na Lorem Ipsum koji sledi posle ovoga :) Sed ut perspiciatis unde omnis iste natus error
							sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
							veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
							consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
							magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
							corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
							reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
							eum fugiat quo voluptas nulla pariatur?
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
						<img alt='noImg' className='About__map' src={mapImage}></img>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
