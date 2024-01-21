import './style.sass'
import cx from 'classnames'

const Input = ({ className, value, onChange, onChangeWithTarget, fit, type, ...props}) => {
    const cs = cx('Input', className, {
        'Input--fit': fit,
    })

    const handleChange = e => {
        onChange && onChange(e.target.value)
        onChangeWithTarget && onChangeWithTarget(e)
    }

    return <input {...props } value={value} onChange={handleChange} type={ type || 'text'} className={cs} />
}

export default Input