import { useEffect } from 'react'
import './Keyboard.css'

const KEYS = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back']
]

export default function Keyboard({ onInput }) {

	useEffect(() => {
		const onKeydown = (event) => {
			if (event.keyCode >= 65 && event.keyCode <= 90) {
				onInput(event.key.toUpperCase())
			}

			if (event.key === 'Enter') onInput('Enter')
			if (event.key === 'Backspace') onInput('Back')
		}

		document.addEventListener('keydown', onKeydown)

		return () => {
			document.removeEventListener('keydown', onKeydown)
		}
	}, [onInput])

	return (<div className="keyboard">
		{KEYS.map((row, index) => (<div className="keyboard-row" key={index}>
			{row.map(key => (
				<button
					className={key === "Enter" || key === "Back" ? "keyboard-key keyboard-key-big" : "keyboard-key"}
					onClick={() => onInput(key)}
					key={key}>{key}
				</button>))}
		</div>))}
	</div>)
}
