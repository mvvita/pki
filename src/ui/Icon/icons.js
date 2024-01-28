export const getIcon = {
	arrow_head: props => (
		<svg
			width='800px'
			height='800px'
			viewBox='0 -0.5 17 17'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='si-glyph si-glyph-triangle-right'
			{...props}>
			<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
				<path
					d='M6.113,15.495 C5.531,16.076 4.01,16.395 4.01,14.494 L4.01,1.506 C4.01,-0.333 5.531,-0.076 6.113,0.506 L12.557,6.948 C13.137,7.529 13.137,8.47 12.557,9.052 L6.113,15.495 L6.113,15.495 Z'
					fill={props.fill || '#434343'}
					className='si-glyph-fill'></path>
			</g>
		</svg>
	),
}
