import { useEffect, useRef } from 'react'
import './Board.css'

export default function Board({ boardState, word }) {
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

	return (<div className="board">
		<div className="board-grid" ref={boardGridEl}>
		{boardState.map((row, index) => (<div className="board-row" key={index}>
			{row.map((cell, index) => <div className="board-tile" key={index}>{cell}</div>)}
		</div>))}
		</div>
	</div>)
}
