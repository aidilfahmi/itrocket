export const changeStyles = theme => {
	const body = document.body

	const isLight = theme === 'light'

	body.style.backgroundColor = isLight ? '#F1F1F1' : '#1c1c1c'
	body.style.color = isLight ? '#000' : 'rgb(237, 237, 237)'
	body.style.colorScheme = isLight ? 'light' : 'dark'

	isLight ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
}
