import './style.sass'
import cx from 'classnames'

const Button = ({ onClick, to, white, children }) => {
    const cs = cx('Button', {
        'Button--white': white,
    })

    return <button className={cs} onClick={onClick}>
        {children}
    </button>
}

export default Button