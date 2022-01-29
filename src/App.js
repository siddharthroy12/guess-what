import { useState } from 'react'
import Header from './Header'
import Board from './Board'
import Keyboard from './Keyboard'

// You expected a loop but it's me HARD CODED EMPTY MATRIX!!!
const defaultBoardState = [
	['','','','',''],
	['','','','',''],
	['','','','',''],
	['','','','',''],
	['','','','',''],
	['','','','','']
]

export default function App() {
	const [boardState, setBoardState] = useState(defaultBoardState)
	const [currentRow, setCurrentRow] = useState(0)
	const [currentCell, setCurrentCell] = useState(0)
	const [word, setWord] = useState('HELLO')

	const onKeyInput = (key) => {
		if (key !== "Enter" && key !== "Back") {
			if (currentCell < 5 && currentRow < 6) {
				setBoardState(prev => {
					prev[currentRow][currentCell] = key
					return prev.map(arr => arr.slice())
				})
			}

			if (currentCell < 5) {
				setCurrentCell(prev => prev +1)
			}
		}

		if (key === "Back") {
			setBoardState(prev => {
				prev[currentRow][currentCell -1] = ''
				return prev.map(arr => arr.slice())
			})
			if (currentCell > 0) {
				setCurrentCell(prev => prev-1)
			}
		}

		if (key === "Enter") {
			let rowFull = true
			boardState[currentRow].forEach(cell => cell === '' ? rowFull = false : null)
			if (rowFull && currentRow < 6) {
				setCurrentRow(prev => prev + 1)
				setCurrentCell(0)
			}
		}
	}

	return (<div className="container">
		<Header />
		<Board boardState={boardState} word={word} currentRow={currentRow}/>
		<Keyboard onInput={onKeyInput}/>
	</div>)
}
