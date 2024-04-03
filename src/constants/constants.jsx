export const reactSelectConfiguration = {
	isSearchable: true,
	isMulti: false,
	styles: {
		option: (provided, { isFocused, isSelected }) => ({
			...provided,
			color: isSelected || isFocused ? 'var(--white)' : 'var(--bold)',
			background: isSelected || isFocused ? 'var(--blue)' : '#f7f8fc',
			width: '100%',
			cursor: 'pointer',
			height: 52,
			boxShadow: 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
			padding: '14px',
			transition: '400ms',
			fontSize: '20px',
			'@media (max-width: 768px)': {
				...provided['@media (max-width: 768px)'],
				fontSize: '12px',
			},
		}),
		container: provided => ({
			...provided,
			width: '100%',
		}),
		singleValue: provided => ({
			...provided,
			color: 'var(--bold)',
		}),
		control: (provided, { isFocused, isSelected }) => ({
			...provided,
			width: '100%',
			boxShadow: 'box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
			outline: 'none',
			borderRadius: 16,
			border: isSelected || isFocused ? '1.34px solid rgb(35, 93, 255)' : '1.34px solid rgb(224, 224, 224)',
			cursor: 'pointer',
			background: isSelected || isFocused ? 'rgba(35, 93, 255, 0.08)' : 'rgb(250, 250, 250)',
			color: 'black',
			height: 60,
			margin: '0',
			padding: 0,
			transition: '400ms',
			'@media (max-width: 768px)': {
				...provided['@media (max-width: 768px)'],
				fontSize: '12px',
			},
			':hover': {
				border: '1.34px solid rgb(35, 93, 255)',
			},
		}),
		menuPortal: provided => ({
			...provided,
			zIndex: 999999999,
		}),
		menu: provided => ({
			...provided,
			margin: 0,
			width: '100%',
			padding: 0,
			border: 'none',
			borderRadius: 8,
			background: '#f7f8fc',
			overflow: 'hidden',
			boxShadow: 'none',
		}),
		menuList: provided => ({
			...provided,
			padding: 0,
			zIndex: 11111111,
		}),
		indicatorSeparator: provided => ({
			...provided,
			display: 'none',
		}),
		dropdownIndicator: provided => ({
			...provided,
			color: 'var(--grey)',
			padding: '8px 14px 8px 0',
			height: 38,
			width: 32,
			':hover': {
				color: 'var(--grey)',
			},
		}),
		valueContainer: provided => ({
			...provided,
			padding: '14px 12px',
			height: 52,
			marginLeft: '25px',
			display: 'flex',
			fontWeight: '500',
			alignContent: 'center',
			fontSize: '20px',
			'@media (max-width: 768px)': {
				...provided['@media (max-width: 768px)'],
				fontSize: '12px',
			},
		}),
		noOptionsMessage: provided => ({
			...provided,
			color: 'var(--bold)',
			width: '100%',
			cursor: 'pointer',
			height: 48,
			padding: '14px 12px',
			textAlign: 'left',
			fontSize: '15px',
		}),
		placeholder: provided => ({
			...provided,
			fontSize: '',
		}),
	},
};
