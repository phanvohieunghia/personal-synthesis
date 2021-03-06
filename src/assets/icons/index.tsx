interface IIconProps {
	height?: string
	color?: string
}
const Github = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<path
				d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z'
				fill='#000000'
			/>
		</svg>
	)
}
const Facebook = (props: IIconProps) => {
	const { height = '20', color = '#104088' } = props
	return (
		<svg height={height} viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5.47782 0C2.44335 0 0 2.44334 0 5.47781V24.5222C0 27.5566 2.44335 30 5.47782 30H15.7997V18.2719H12.6985V14.0494H15.7997V10.4419C15.7997 7.60762 17.6321 5.00531 21.8531 5.00531C23.5622 5.00531 24.826 5.16938 24.826 5.16938L24.7266 9.11251C24.7266 9.11251 23.4377 9.10033 22.0312 9.10033C20.5091 9.10033 20.265 9.80167 20.265 10.966V14.0494H24.8475L24.6478 18.2719H20.265V30H24.5222C27.5567 30 30 27.5567 30 24.5222V5.47784C30 2.44338 27.5567 2.99999e-05 24.5222 2.99999e-05H5.47779L5.47782 0Z'
				fill={color}
			/>
		</svg>
	)
}
const Facebook2 = (props: IIconProps) => {
	const { height = '20', color = '#104088' } = props
	return (
		<svg
			height={height}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill={color}>
			<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
		</svg>
	)
}
const LinkedIn = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg height={height} viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M5.88193 0.00750732C2.65041 0.00750732 0.00561523 2.65225 0.00561523 5.88382V24.119C0.00561523 27.3506 2.65036 29.9944 5.88193 29.9944H24.1172C27.3487 29.9944 29.9925 27.3506 29.9925 24.119V5.88382C29.9925 2.65231 27.3487 0.00750732 24.1172 0.00750732H5.88193ZM7.35991 4.95595C8.90935 4.95595 9.86374 5.97313 9.8932 7.3102C9.8932 8.61775 8.90928 9.66352 7.32994 9.66352H7.30087C5.78092 9.66352 4.79851 8.61781 4.79851 7.3102C4.79851 5.97316 5.81065 4.95595 7.35988 4.95595H7.35991ZM20.7123 11.2052C23.6922 11.2052 25.926 13.1529 25.926 17.3383V25.1518H21.3974V17.8622C21.3974 16.0304 20.742 14.7806 19.1031 14.7806C17.852 14.7806 17.1063 15.623 16.7789 16.4367C16.6592 16.7278 16.6298 17.1344 16.6298 17.5417V25.1518H12.1013C12.1013 25.1518 12.1607 12.8034 12.1013 11.5248H16.6308V13.4545C17.2326 12.526 18.309 11.2052 20.7123 11.2052V11.2052ZM5.06563 11.5258H9.59421V25.1519H5.06563V11.5258Z'
				fill='#1E6BB3'
			/>
		</svg>
	)
}
const Google = (props: IIconProps) => {
	const { height = '20', color = '#DC4E41' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			height={height}
			viewBox='0 0 24 24'>
			<path
				d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-10.333 16.667c-2.581 0-4.667-2.087-4.667-4.667s2.086-4.667 4.667-4.667c1.26 0 2.313.46 3.127 1.22l-1.267 1.22c-.347-.333-.954-.72-1.86-.72-1.593 0-2.893 1.32-2.893 2.947s1.3 2.947 2.893 2.947c1.847 0 2.54-1.327 2.647-2.013h-2.647v-1.6h4.406c.041.233.074.467.074.773-.001 2.666-1.787 4.56-4.48 4.56zm11.333-4h-2v2h-1.334v-2h-2v-1.333h2v-2h1.334v2h2v1.333z'
				fill={color}
			/>
		</svg>
	)
}
const Google2 = (props: IIconProps) => {
	const { height = '20', color = '#DC4E41' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			height={height}
			viewBox='0 0 24 24'
			fill={color}>
			<path
				d='M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z'
				fillRule='evenodd'
				clipRule='evenodd'
			/>
		</svg>
	)
}
const Loading = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			viewBox='0 0 16 16'
			fill='none'
			data-view-component='true'
			className='anim-rotate'
			height={height}
			xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='8'
				cy='8'
				r='7'
				stroke='currentColor'
				strokeOpacity='0.25'
				strokeWidth='2'
				vectorEffect='non-scaling-stroke'></circle>
			<path
				d='M15 8a7.002 7.002 0 00-7-7'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				vectorEffect='non-scaling-stroke'></path>
			<animateTransform
				attributeName='transform'
				attributeType='XML'
				type='rotate'
				dur='1s'
				from='0 0 0'
				to='360 0 0'
				repeatCount='indefinite'
			/>
		</svg>
	)
}
const Loading1 = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			height={height}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'>
			<path d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'>
				<animateTransform
					attributeName='transform'
					attributeType='XML'
					type='rotate'
					dur='1s'
					from='0 50 50'
					to='360 50 50'
					repeatCount='indefinite'
				/>
			</path>
		</svg>
	)
}
const Bars = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			height={height}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 448 512'>
			<path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
		</svg>
	)
}
const XMark = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
			<path d='M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z' />
		</svg>
	)
}
const Search = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			viewBox='0 0 30 30'
			height={height}>
			<path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z' />
		</svg>
	)
}
const CheckMark = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			height={height}
			viewBox='0 0 24 24'>
			<path d='M23.334 11.96c-.713-.726-.872-1.829-.393-2.727.342-.64.366-1.401.064-2.062-.301-.66-.893-1.142-1.601-1.302-.991-.225-1.722-1.067-1.803-2.081-.059-.723-.451-1.378-1.062-1.77-.609-.393-1.367-.478-2.05-.229-.956.347-2.026.032-2.642-.776-.44-.576-1.124-.915-1.85-.915-.725 0-1.409.339-1.849.915-.613.809-1.683 1.124-2.639.777-.682-.248-1.44-.163-2.05.229-.61.392-1.003 1.047-1.061 1.77-.082 1.014-.812 1.857-1.803 2.081-.708.16-1.3.642-1.601 1.302s-.277 1.422.065 2.061c.479.897.32 2.001-.392 2.727-.509.517-.747 1.242-.644 1.96s.536 1.347 1.17 1.7c.888.495 1.352 1.51 1.144 2.505-.147.71.044 1.448.519 1.996.476.549 1.18.844 1.902.798 1.016-.063 1.953.54 2.317 1.489.259.678.82 1.195 1.517 1.399.695.204 1.447.072 2.031-.357.819-.603 1.936-.603 2.754 0 .584.43 1.336.562 2.031.357.697-.204 1.258-.722 1.518-1.399.363-.949 1.301-1.553 2.316-1.489.724.046 1.427-.249 1.902-.798.475-.548.667-1.286.519-1.996-.207-.995.256-2.01 1.145-2.505.633-.354 1.065-.982 1.169-1.7s-.135-1.443-.643-1.96zm-12.584 5.43l-4.5-4.364 1.857-1.857 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.642z' />
		</svg>
	)
}
const GridLarge = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			viewBox='0 0 448 512'
			height={height}>
			<path d='M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z' />
		</svg>
	)
}
const GridSmall = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			viewBox='0 0 448 512'
			height={height}>
			<path d='M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z' />
		</svg>
	)
}
const List = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='props.heighttp://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			height={height}>
			<path d='M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z' />
		</svg>
	)
}
const Copy = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='props.heighttp://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			height={height}>
			<path
				fillRule='evenodd'
				d='M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z'></path>
			<path d='M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z'></path>
		</svg>
	)
}
const Check = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 16 16'
			height={height}
			fill={props.color}>
			<path
				fillRule='evenodd'
				d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'></path>
		</svg>
	)
}
const Link = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg height={height} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
			<rect height={height} opacity='0' />
			<path d='M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z' />
			<path d='M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z' />
		</svg>
	)
}
const InfinityIcon = (props: IIconProps) => {
	const { height = '20' } = props
	return (
		<svg
			xmlns='httpprops.height//www.w3.org/2000/svg'
			height={height}
			viewBox='0 0 150 150'>
			<path
				d='M115.885,38.631c-21.312,0-35.416,17.425-47.859,32.802c-10.631,13.136-20.67,25.54-32.897,25.54
			c-12.709,0-20.512-13.062-20.512-22.426c0-8.682,8.56-21.299,21.976-21.299c13.018,0,19.8,10.419,20.142,10.953
			c2.109,3.413,6.587,4.487,10.017,2.395c3.447-2.1,4.539-6.597,2.438-10.044c-0.446-0.73-11.167-17.92-32.597-17.92
			C15.029,38.632,0,57.562,0,74.548c0,17.521,14.427,37.043,35.128,37.043c19.199,0,31.94-15.74,44.259-30.963
			c11.396-14.078,22.161-27.379,36.498-27.379c8.53,0,14.135,2.894,17.131,8.84c2.596,5.16,2.594,10.999,2.592,13.022
			c0,1.16-0.613,6.978-3.451,12.217c-3.236,5.968-7.83,8.746-14.469,8.746c-13.369,0-20.592-8.69-23.312-11.963
			c-0.707-0.852-1.216-1.465-1.896-2.047c-3.062-2.623-7.678-2.271-10.306,0.795c-2.534,2.957-2.29,7.353,0.478,10.014
			c0.132,0.15,0.291,0.347,0.48,0.576c3.545,4.266,14.324,17.24,34.553,17.24c24.586,0,32.537-23.973,32.537-35.678
			c0.002-7.455-1.394-14.013-4.154-19.496C142.193,47.815,133.809,38.631,115.885,38.631z'
			/>
		</svg>
	)
}
const Icons = {
	Facebook,
	Facebook2,
	Google,
	Google2,
	LinkedIn,
	Github,
	Bars,
	XMark,
	Search,
	CheckMark,
	GridLarge,
	GridSmall,
	List,
	Loading,
	Loading1,
	Copy,
	Check,
	Link,
	InfinityIcon,
}

export default Icons

export const IconList = [
	{
		icon: Icons.Facebook,
		name: 'Facebook',
		reference: 'https://iconmonstr.com/facebook-3-svg/',
	},
	{
		icon: Icons.Facebook2,
		name: 'Facebook',
		reference: 'https://iconmonstr.com/facebook-1-svg/',
	},
	{
		icon: Icons.Google,
		name: 'Google',
		reference: 'https://iconmonstr.com/google-plus-3-svg/',
	},
	{
		icon: Icons.Google2,
		name: 'Google',
		reference: 'https://iconmonstr.com/google-plus-1-svg/',
	},
	{
		icon: Icons.LinkedIn,
		name: 'LinkedIn',
		reference: 'https://iconmonstr.com/linkedin-3-svg/',
	},
	{
		icon: Icons.Github,
		name: 'Github',
		reference: 'https://iconmonstr.com/github-3-svg/',
	},
	{
		icon: Icons.Bars,
		name: 'Bars',
		reference: 'https://fontawesome.com/icons/bars?s=solid',
	},
	{
		icon: Icons.XMark,
		name: 'XMark',
		reference: 'https://iconmonstr.com/x-mark-8-svg/',
	},
	{
		icon: Icons.Search,
		name: 'Search',
		reference: 'https://icons8.com/icons/set/search',
	},
	{
		icon: Icons.CheckMark,
		name: 'CheckMark',
		reference: 'https://iconmonstr.com/check-mark-6-svg/',
	},
	{
		icon: Icons.GridLarge,
		name: 'GridLarge',
		reference: 'https://fontawesome.com/search',
	},
	{
		icon: Icons.GridSmall,
		name: 'GridSmall',
		reference: 'https://fontawesome.com/search',
	},
	{
		icon: Icons.List,
		name: 'List',
		reference: 'https://fontawesome.com/search',
	},
	{
		icon: Icons.Loading,
		name: 'Loading',
		reference: 'https://primer.style/octicons/',
	},
	{
		icon: Icons.Copy,
		name: 'Copy',
		reference: 'https://primer.style/octicons/',
	},
	{
		icon: Icons.Check,
		name: 'Check',
		reference: 'https://primer.style/octicons/',
	},
	{
		icon: Icons.Link,
		name: 'Link',
		reference: 'https://www.svgrepo.com/svg/305221/external-link',
	},
	{
		icon: Icons.InfinityIcon,
		name: 'InfinityIcon',
		reference: 'https://www.svgrepo.com/svg/305221/external-link',
	},
]
export const RelativeIcons = [
	{ name: 'fontawesome', reference: 'https://fontawesome.com/' },
	{ name: 'iconmonstr', reference: 'https://iconmonstr.com/' },
	{ name: 'icons8', reference: 'https://icons8.com/' },
	{ name: 'svgrepo', reference: 'https://www.svgrepo.com/' },
	{ name: 'icongr', reference: 'https://icongr.am/' },
	{ name: 'primer/Octicons', reference: 'https://primer.style/octicons/' },
	{ name: 'loading', reference: 'https://loading.io/' },
]
