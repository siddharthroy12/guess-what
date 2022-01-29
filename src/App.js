import { useState } from 'react'
import Header from './Header'
import Board from './Board'

export default function App() {
	const [boardState, setBoardState] = useState(Array(6).fill(Array(5).fill('')))

	return (<div className="container">
		<Header />
		<Board boardState={boardState} word="test"/>
	</div>)
}
