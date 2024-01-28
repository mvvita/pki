import { getIcon } from './icons'

const Icon = ({ name, ...props }) => {
	const ResolvedIcon = getIcon[name]

	return <ResolvedIcon {...props} />
}

export default Icon
