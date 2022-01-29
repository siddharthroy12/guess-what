import { useEffect, useRef } from 'react'
import './Board.css'

export default function Board({ boardState, word }) {
	const boardGridEl = useRef(null)
	
	const onResize = () => {
		boardGridEl.current.style.width = (boardGridEl.current.clientHeight -50) +'px'
		console.log(boardGridEl.current.clientHeight);
	}

	useEffect(() => {
		if (boardGridEl && boardGridEl.current) {
			onResize();
			window.addEventListener('resize', onResize)
		}
	}, [])

	return (<div className="board">
		<div className="board-grid" ref={boardGridEl}>
		{boardState.map((row, index) => (<div className="board-row" key={index}>
			{row.map((cell, index) => <div className="board-tile" key={index}></div>)}
		</div>))}
		</div>
	</div>)
}
