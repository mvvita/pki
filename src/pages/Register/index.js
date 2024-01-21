import './style.sass'
import {Link} from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import {useState} from 'react'

const Register = () => {
    const [form, setForm] = useState({})

    const updateField = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    return <div className='Register'>
        <div className='Register__form'>
            <h2 className='FormHeader'>Registracija</h2>
            <div className='FormLabel'>Ime</div>
            <Input name='bane' fit value={form.name} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Prezime</div>
            <Input name='lastName' fit value={form.lastName} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Email</div>
            <Input name='email' fit value={form.email} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Kontakt telefon</div>
            <Input name='phone' fit value={form.phone} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Adresa</div>
            <Input name='address' fit value={form.address} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Korisnicko ime</div>
            <Input name='username' fit value={form.username} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Lozinka</div>
            <Input name='password' type='password' fit value={form.password} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Potvrda lozinke</div>
            <Input name='passwordConfirmation' type='password' fit value={form.passwordConfirmation} onChangeWithTarget={updateField} />
            <div className='FormLabel u-mt-16'>Vec imate nalog? Možete se prijaviti <Link className='AppLink' to='/login'>ovde.</Link></div>
            <Button className='u-mt-16'>Registracija</Button>
        </div>
    </div>
}

export default Register