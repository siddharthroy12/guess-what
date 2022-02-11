import { useEffect, useRef } from 'react'
import './Board.css'

// -1: Not present, 0: present but wrong spot, 1: present and right spot
export function getKeyState(key, index, word) {
  if (key === '') return -1
  if (word.includes(key)) {
    if (word[index] === key) return 1
    else return 0
  } else return -1
}

function countLetter(letter, word) {
  let count = 0
  for(let i = 0; i < word.length; i++) {
    if (word[i] === letter) count++
  }
  return count
}

export default function Board({ boardState, word, currentRow }) {
  const boardGridEl = useRef(null)
  
  const onResize = () => {
    boardGridEl.current.style.width = (boardGridEl.current.clientHeight - 20) +'px'
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

  // Check the highlight condition for each cell
  const getClassName = (cell, index, row, currentRow) => {
    // Only check for submitted words
    if (row >= currentRow) return "board-tile"

    // Get the current row word
    const currentRowWord = boardState[row].join('')
    // Get the letter count in current row word
    const letterCount = countLetter(cell, currentRowWord)

    // If the letter in correct spot
    if (getKeyState(cell, index, word) === 1) {
      return "board-tile tile-correct"
    }

    // If the letter in present but not in correct spot
    if (getKeyState(cell, index, word) === 0) {

      // If the letter is present in else where
      // Then I don't want to highlight it multiple times
      if (letterCount > 1) {

        // If one of the other duplicated is in correct spot
        // Don't highlight
        boardState[row].forEach((letter, indx) => {
          if (getKeyState(letter, indx, word) === 1) {
            return "board-title"
          }
        })

        // If the others are in wrong spot only highlight the first one
        let firstIndex = 0;
        for (let i = 0; i < boardState[row].length; i++) {
          if (boardState[row][i] === cell) {
            firstIndex = i
            break
          }
        }

        if (firstIndex === index) {
          return "board-tile tile-present"
        } else {
          return "board-tile"
        }
      } else {
        return "board-tile tile-present"
      }
    }

    // If the letter is not present, don't highlight
    return "board-tile tile-wrong"

  }

  return (<div className="board">
    <div className="board-grid" ref={boardGridEl}>
    {boardState.map((row, rowIndex) => (<div className="board-row" key={rowIndex}>
      {row.map((cell, index) => (
        <div
          className={getClassName(cell, index, rowIndex, currentRow)}
          key={index}>
          <span>
          {cell}
          </span>
        </div>
      ))}
    </div>))}
    </div>
  </div>)
}
