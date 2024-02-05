import './style.sass'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import { useContext, useState } from 'react'
import AppContext from '../../context'
import ErrorMessage from '../../ui/ErrorMessage'
import Textarea from '../../ui/Textarea'
import Select from '../../ui/Select'
import Image from '../../ui/Image'

const availableImages = ['strawberry', 'pinkCake', 'choco', 'cheesecake']

const ImageChooser = ({ image, onChooseImage }) => {
	const [visible, setVisible] = useState(false)
	const onImageClick = image => {
		onChooseImage(image)
		setVisible(false)
	}

	return (
		<>
			{image && (
				<div>
					<Image src={image} className='ImagePreview' />
				</div>
			)}
			<Button style={{ marginTop: '4px' }} onClick={() => setVisible(true)} small whiteBlack>
				Izaberite sliku...
			</Button>
			{visible && (
				<div className='Modal'>
					<div className='Modal__content'>
						{availableImages.map(i => (
							<Image onClick={onImageClick.bind(null, i)} className='ModalImage' src={i} key={i} />
						))}
					</div>
				</div>
			)}
		</>
	)
}

const NewArticle = () => {
	const { state, setState } = useContext(AppContext)
	const [form, setForm] = useState({ header: '', content: '', description: '', imgSrc: '', type: '' })
	const [error, setError] = useState([])
	const navigate = useNavigate()

	const updateField = e => {
		setForm(f => ({ ...f, [e.target.name]: e.target.value }))
	}

	const onSubmit = () => {
		const invalidKeys = Object.keys(form).filter(k => !form[k])
		const errors = invalidKeys.map(k => `Polje ${k} ne sme biti prazno.`)
		setError(errors)
		if (errors.length > 0) {
			return
		}

		setError(errors)
		if (errors.length > 0) {
			return
		}

		setState({ cakes: [...state.cakes, { ...form, id: +new Date(), comments: [] }] })
		navigate('/articles')
	}

	return (
		<div className='NewArticle'>
			<div className='NewArticle__form'>
				<h2 className='FormHeader'>Novi artikal</h2>
				<div className='FormLabel'>Naziv proizvoda</div>
				<Input name='header' fit value={form.header} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Opis</div>
				<Textarea rows={5} name='description' fit value={form.description} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Sastav</div>
				<Textarea rows={5} name='content' fit value={form.content} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Cena</div>
				<Input name='price' fit value={form.price} onChangeWithTarget={updateField} />
				<div className='FormLabel u-mt-16'>Tip artikla</div>
				<Select
					options={[
						{ value: '', displayValue: 'Izaberite tip' },
						{ value: 'COOKIE', displayValue: 'Kolac' },
						{ value: 'CAKE', displayValue: 'Torta' },
					]}
					name='type'
					fit
					value={form.type}
					onChangeWithTarget={updateField}
				/>
				<div className='FormLabel u-mt-16'>Slika</div>
				<div>
					<ImageChooser
						image={form.imgSrc}
						onChooseImage={value => updateField({ target: { name: 'imgSrc', value } })}
					/>
				</div>
				<ErrorMessage className='u-mt-16' messages={error} />
				<Button onClick={onSubmit} className='u-mt-16'>
					Potvrdi
				</Button>
			</div>
		</div>
	)
}

export default NewArticle
