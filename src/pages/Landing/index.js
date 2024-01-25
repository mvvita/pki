import './style.sass'
import backgroundImage
    from './[removal.ai]_eb8ebcc3-f3b9-432c-992d-e441ee26013a-candle-cupcake-happy-birthday-happy-birthday-wallpaper-preview-transformed.png'
import {Link} from 'react-router-dom'

const Landing = () => {
    return <div className="Landing">
        <div className="Landing__imageContainer">
            <div className="Landing__imageText">
                <div>Vaše omiljene torte i kolači...
                </div>
                <div>... na jedan <Link className='AppLinkWhite' to='/articles'>klik</Link> od vas.</div>
            </div>
            <img className="Landing__image" alt="noimg" src={backgroundImage}></img>
        </div>
    </div>
}

export default Landing