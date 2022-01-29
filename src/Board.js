import { useEffect, useRef } from 'react'
import './Board.css'

// -1: Not present, 0: present but wrong spot, 1: present and right spot
function getKeyState(key, index, word) {
	if (word.includes(key)) {
		if (word[index] === key) return 1
		else return 0
	} else return -1
}

export default function Board({ boardState, word, currentRow }) {
	const boardGridEl = useRef(null)
	
	const onResize = () => {
		boardGridEl.current.style.width = (boardGridEl.current.clientHeight - 70) +'px'
	}

	useEffect(() => {
		if (boardGridEl && boardGridEl.current) {
			onResize();
			window.addEventListener('resize', onResize)
		}

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	const getClassName = (cell, index, row, currentRow) => {
		console.log(currentRow, row)
		if (row < currentRow) {
			console.log(true)
			if (getKeyState(cell, index, word) === -1) {
				return "board-tile tile-wrong"
			} else if(getKeyState(cell, index, word) === 0) {
				return "board-tile tile-present"
			} else if(getKeyState(cell, index, word) === 1) {
				return "board-tile tile-correct"
			}
		} else {
			return "board-tile"
		}
	}

	return (<div className="board">
		<div className="board-grid" ref={boardGridEl}>
		{boardState.map((row, rowIndex) => (<div className="board-row" key={rowIndex}>
			{row.map((cell, index) => (
				<div
					className={getClassName(cell, index, rowIndex, currentRow)}
					key={index}>
					{cell}
				</div>
			))}
		</div>))}
		</div>
	</div>)
}
