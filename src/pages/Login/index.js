import './style.sass'
import {Link} from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import {useState} from 'react'

const Login = () => {
    const [form, setForm] = useState({ username: '', password: ''})

    const updateField = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    return <div className='Login'>
        <div className='Login__form'>
            <h2 className='FormHeader'>Prijava na sistem</h2>
            <div className='FormLabel'>Korisnicko ime</div>
            <Input name='username' fit value={form.username} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Lozinka</div>
            <Input name='password' type='password' fit value={form.password} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Nemate nalog? Možete napraviti novi <Link className='AppLink' to='/register'>ovde.</Link></div>
            <Button className='u-mt-16'>Prijava</Button>
        </div>
    </div>
}

export default Login