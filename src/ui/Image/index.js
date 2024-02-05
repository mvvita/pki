import imageResolver from '../../assets/imageResolver'

const Image = ({ src, ...props }) => {
	return <img src={imageResolver[src]} {...props} />
}

export default Image
