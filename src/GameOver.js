import { getKeyState } from './Board'
import './GameOver.css'

function generateResultText(boardState, word) {
	let result = 'Word Guess  |  ' + word + '\n\n'

	for (let column = 0; column < 6; column++) {
		for (let row = 0; row < 5; row++) {
			let key = boardState[column][row]
			if (key !== '') {
				const keyState = getKeyState(key, row, word)
				if (keyState === -1) {
					result += '🟥'
				} else if (keyState === 0) {
					result += '🟨'
				} else if (keyState === 1) {
					result += '🟩'
				}
			}
		}
		if (boardState[column].join('') !== '') result += '\n'
	}

	return result
}

export default function GameOver({ word, state, boardState, onRestart, addAlert }) {

	const onShare = () => {
		navigator.clipboard.writeText(generateResultText(boardState, word))
		addAlert('Copied to clipboard')
	}

	return (<div className="game-over" onClick={onRestart}>
		<div className="game-over__box" onClick={(event) => event.stopPropagation()}>
			<h1 className="game-over-title">{state === 1 ? 'You Win!':  'Game Over'}</h1>
			<p className="game-word">{word}</p>
			<div className="game-over__box__buttons">
				<div className="game-over__box__buttons__box">
					<button className="btn" onClick={onRestart}>
						Next Wordle
					</button>
				</div>
				<div className="game-over__box__buttons__box">
					<button className="btn btn-primary" onClick={onShare}>
						Share
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
							<path fill="var(--text-color)" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
					</svg>
					</button>
				</div>
			</div>
	</div>
	</div>)
}
