document.addEventListener('DOMContentLoaded', () => {
	// grab elements & store in variable
	const header = document.querySelector('#header')
	const form = document.querySelector('#guessNum')
	const inputNum = document.querySelector('#input-number')
	const success = document.querySelector('#success')
	const hint = document.querySelector('#hint')
	const showNum = document.querySelector('.show-num')
	const enter = document.querySelector('#enter')
	const reset = document.querySelector('#reset')

	let generateRandomNum = Math.floor(Math.random() * 30) + 1
	console.log(`INIT: ${generateRandomNum}`)
	let tries = 1
	reset.style.visibility = 'hidden'

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		// get input value
		const getNum = parseFloat(e.target.getNum.value)

		if (getNum < generateRandomNum) {
			tries++
			success.textContent = ''
			e.target.getNum.value = ''
			hint.textContent = 'Oops... Maybe higher number?'
			enter.innerText = 'Try Again'
		} else if (getNum > generateRandomNum) {
			tries++
			success.textContent = ''
			e.target.getNum.value = ''
			hint.textContent = "Hmmm... Let's try lower number"
			enter.innerText = 'Try Again'
		} else {
			header.innerHTML = '<span class="message">Yes! The mystery number is:</span>'
			success.innerHTML = `You got me after <span class="bigger-font">${tries}</span> times!`
			hint.textContent = ''
			e.target.getNum.value = ''
			showNum.textContent = `${getNum}`
			reset.style.visibility = 'visible'
			enter.style.visibility = 'hidden'
			inputNum.style.visibility = 'hidden'
		}
		console.log(`TRY: ${tries}`)
	})

	reset.addEventListener('click', (e) => {
		e.preventDefault()

		reset.style.visibility = 'hidden'
		enter.style.visibility = 'visible'
		inputNum.style.visibility = 'visible'
		document.querySelector('input').value = ''
		success.textContent = ''
		showNum.textContent = ''
		enter.textContent = "Let's play!"
		header.textContent = 'Choose a number between 1 and 30'

		generateRandomNum = Math.floor(Math.random() * 30) + 1
		tries = 1

		console.log(`from reset: ${generateRandomNum}`)
		console.log(`tries from reset: ${tries}`)
	})
})
