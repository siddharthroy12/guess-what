import { useEffect, useState } from 'react'
import { getKeyState } from './Board.js'
import './Keyboard.css'

const KEYS = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back']
]

export default function Keyboard({ onInput, boardState, word, currentRow }) {
  const [correctLetters, setCorrectLetter] = useState([])
  const [presentLetters, setPresentLetters] = useState([])
  const [incorrectLetters, setIncorrectLetters] = useState([])

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

  useEffect(() => {
    let correctLetters = []
    let presentLetters = []
    let incorrectLetters = []

    for(let row = 0; row < 6; row++) {
      if (row < currentRow) {
        for(let cell = 0; cell < 5; cell++) {
          const state = getKeyState(boardState[row][cell], cell, word)
          if (state === -1) incorrectLetters.push(boardState[row][cell])
          else if (state === 0) presentLetters.push(boardState[row][cell])
          if (state === 1) correctLetters.push(boardState[row][cell])
        }
      }
    }

    setCorrectLetter(correctLetters)
    setPresentLetters(presentLetters)
    setIncorrectLetters(incorrectLetters)
  }, [boardState, word, currentRow])

  const getClassName = (key) => {
    let result = 'keyboard-key'

    if (key === "Enter" || key === "Back")
      result += ' keyboard-key-big'

    if (incorrectLetters.includes(key))
      result += ' tile-wrong'
    else if (presentLetters.includes(key))
      result += ' tile-present'
    else if (correctLetters.includes(key))
      result += ' tile-correct'

    return result
  }

	return (<div className="keyboard">
		{KEYS.map((row, index) => (<div className="keyboard-row" key={index}>
			{row.map(key => (
				<button
					className={getClassName(key)}
					onClick={() => onInput(key)}
					key={key}>{key}
				</button>))}
		</div>))}
	</div>)
}
